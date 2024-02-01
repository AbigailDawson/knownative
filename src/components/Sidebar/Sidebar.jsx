import './Sidebar.css'

export default function Sidebar({ user, numTexts, numArchivedTexts }) {
  return (
    <>
    <div className="sidebar-heading">
      <h3>Welcome back</h3>
      <h1>{user.name}</h1>
    </div>
    <div className="stats">
      <p>Reading: <span className="num">{ numTexts }</span></p>
      <p>Archived: <span className="num">{ numArchivedTexts }</span></p>
    </div>
      
      
    </>
  )
}