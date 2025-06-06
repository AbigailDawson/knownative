import React, { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import "./TextsPage.scss";
import StudyTab from "./StudyTab";
import { useAuthContext } from "../../contexts/Auth/AuthProvider";


export default function TextsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams(); 
  const [activeTab, setActiveTab] = useState("read");
  const { user } = useAuthContext();
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [text, setText] = useState(location.state?.text || null);

  function handleTabClick(tabName) {
    setActiveTab(tabName);
  }

  if (!text) {
    return (
      <div style={{ padding: '2rem' }}>
        <p>Text not found.</p>
        <Link to="/dashboard">← Return to Dashboard</Link>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <DashboardNavbar activeTab="Dashboard" />

      <div className="dashboard__main">
              {/* User dropdown with name + profile info */}
        <div className="dashboard__user-info">
          <div className="dashboard__user-dropdown">
            <button
              className="dashboard__user-dropdown-options"
              onClick={() => setIsUserDropdownOpen((prev) => !prev)}
            >
              <p className="dashboard__user-name">{user.username}</p>
              <img
                className="dashboard__user-profile-pic"
                src="/images/square-logo.png"
                alt="User profile picture."
              />
              <p className="dashboard__user-dropdown-icon">
                {isUserDropdownOpen ? "┓" : "┕"}
              </p>
            </button>

            {isUserDropdownOpen && (
              <div className="dashboard__user-dropdown-panel">
                <p>
                  <strong>
                    {user.firstName} {user.lastName}
                  </strong>
                </p>
                <p>Joined {new Date(user.createdAt).toLocaleDateString()}</p>
              </div>
            )}
          </div>
        </div>


        <Link to="/dashboard" className="text-page__back">
          <span className="material-symbols-outlined" style={{ fontSize: "32px", marginRight: "0.5rem" }}>
            chevron_left
          </span>
          Return to Dashboard
        </Link>

     {/* Tabs for switching mode */}
        <div className="tabs sticky-fade text-page__tabs-center">
          <button className={`tabs__btn ${activeTab === "read" ? "tabs__btn--active" : ""}`} onClick={() => handleTabClick("read")}>Read</button>
          <button className={`tabs__btn ${activeTab === "study" ? "tabs__btn--active" : ""}`} onClick={() => handleTabClick("study")}>Study</button>
          <button className={`tabs__btn ${activeTab === "translate" ? "tabs__btn--active" : "" }`} onClick={() => handleTabClick("translate")}>Translate</button>
        </div>

        <div className="text-divider"></div>

        {/* Show title and source link on every tab */}
        <div className="Text text-content">
          <h1 className="text-title">{text.title}</h1>
          <a
            href={text.source}
            target="_blank"
            rel="noopener noreferrer"
            className="text-source"
          >
            View Original Source
          </a>
        </div>

        <div className="text-divider"></div>

        {/* show the full paragraph on the read tab*/}
        {activeTab === "read" && (
          <section className="read-container read-container--active">
            <p className="text-body">{text.content}</p>
          </section>
        )}


        <div>
          {activeTab === "study" && <StudyTab text={text} />}
          {activeTab === "translate" && <p>This is the Translate tab.</p>}
        </div>
      </div>
    </div>
  );
}