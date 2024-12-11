import './DemoReadText.scss'

export default function DemoReadText({ text }) {

  
  return !text ? 'Loading ...' 
  : (    
  <div className="read-text">

    <div className="read-text__bottom">
      <div className="read-text__block">
        <p className="zh">{text.content}</p>
      </div>
    </div>
        
  </div>      
  )
}