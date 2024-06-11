import './ReadText.css'

export default function ReadText({ text }) {

  return !text ? 'Loading ...' 
  : (    
  <div className="ReadText">

    <div className="top">

      <div className="bottom">
        <div className="read-text-block">
          <p className="zh">{text.content}</p>
        </div>
      </div>
        
    </div>
  </div>
      
  )
}