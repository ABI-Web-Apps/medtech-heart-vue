
import topics from '~/assets/data/topics.json';

export default (_, inject) => {
  inject('getTopics', () => {return topics}),
  inject('isTopicDisabled', (topic) => {return isTopicDisabled(topic)})
  inject('isSubTopicDisabled', (subTopic) => {return isSubTopicDisabled(subTopic)})
  inject('getContentBySlug', (slug) => {return getContentBySlug(slug)})
}


function getContentBySlug(slug){
  const [topicKey,subTopicKey]=slug.toLowerCase().split('-')
  let content=null
  if(topicKey!=null && subTopicKey!=null){
    const topic=topics[topicKey]
    
    if(topic!=null){
      const subTopic=topic.subTopics.filter(function (subTopic){
          return subTopic.slug.toLowerCase()===subTopicKey
      })[0]

      if(subTopic!=null)
        content={...subTopic, parentTopic: {"slug": topicKey, "heading": topic.heading, "title": topic.title}}
    }
  }

  return content
}

function isTopicDisabled(topic){
  let flag=true    
  if(topic.subTopics){
    if(topic.subTopics.length>0){
      if(topic.subTopics[0].dataFile){
        if(topic.subTopics[0].dataFile!=""){
          flag=false
        }
      }
    }
  }     
  return flag
}


function isSubTopicDisabled(subTopic){
  let flag=true
  if(subTopic.dataFile){
    if(subTopic.dataFile!=""){
      flag=false
    }
  }
  return flag  
}