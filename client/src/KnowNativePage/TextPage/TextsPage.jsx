import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import "./TextsPage.scss";

export default function TextsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("read");

  function handleTabClick(tabName) {
    setActiveTab(tabName);
  }

  // Temp mock data to be removed later
  const mockText = {
    title: "10 個台灣人最愛去的日本城市！",
    source:
      "https://www.housefeel.com.tw/article/%E6%97%A5%E6%9C%AC%E6%97%85%E9%81%8A-%E6%97%A5%E6%9C%AC%E6%99%AF%E9%BB%9E-%E6%97%A5%E6%9C%AC%E8%A7%80%E5%85%89-%E6%97%A5%E6%9C%AC%E5%9F%8E%E5%B8%82/",
    content: `位在日本本州中部的靜岡縣，鄰近神奈川縣，有著日本最高、最著名的世界遺產「富士山」，大家最喜歡去的景點之一「伊豆半島」更是連日本人都非常熱愛的度假勝地，還有熱海沙灘、夢幻景點大井川鐵路等。靜岡縣南部緊鄰太平洋，眺望廣闊綿延的海岸線，十分悠閒，如果喜愛休閒輕鬆的旅程，它會是你的好選擇！此外，去過靜岡縣「伊豆仙人掌動物園」的網友表示，「可以很親近不同的小動物，隻隻都會賣萌賺零食。水豚非常親人，袋鼠十分慵懶，看他們浸溫泉，可以看足一小時」、「水豚太可愛了，樂園小小的但規劃的很不錯，可以逛完大室山後來走走」，也推薦列入行程中喔。位在日本本州中部的靜岡縣，鄰近神奈川縣，有著日本最高、最著名的世界遺產「富士山」，大家最喜歡去的景點之一「伊豆半島」更是連日本人都非常熱愛的度假勝地，還有熱海沙灘、夢幻景點大井川鐵路等。靜岡縣南部緊鄰太平洋，眺望廣闊綿延的海岸線，十分悠閒，如果喜愛休閒輕鬆的旅程，它會是你的好選擇！此外，去過靜岡縣「伊豆仙人掌動物園」的網友表示，「可以很親近不同的小動物，隻隻都會賣萌賺零食。水豚非常親人，袋鼠十分慵懶，看他們浸溫泉，可以看足一小時」、「水豚太可愛了，樂園小小的但規劃的很不錯，可以逛完大室山後來走走」，也推薦列入行程中喔。位在日本本州中部的靜岡縣，鄰近神奈川縣，有著日本最高、最著名的世界遺產「富士山」，大家最喜歡去的景點之一「伊豆半島」更是連日本人都非常熱愛的度假勝地，還有熱海沙灘、夢幻景點大井川鐵路等。靜岡縣南部緊鄰太平洋，眺望廣闊綿延的海岸線，十分悠閒，如果喜愛休閒輕鬆的旅程，它會是你的好選擇！此外，去過靜岡縣「伊豆仙人掌動物園」的網友表示，「可以很親近不同的小動物，隻隻都會賣萌賺零食。水豚非常親人，袋鼠十分慵懶，看他們浸溫泉，可以看足一小時」、「水豚太可愛了，樂園小小的但規劃的很不錯，可以逛完大室山後來走走」，也推薦列入行程中喔。`,
  };

  return (
    <div className="dashboard">
      <DashboardNavbar activeTab="Dashboard" />

      <div className="dashboard__main">
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

    {/*Render basecd on active tab */}
        {activeTab === "read" && (
            <section className="read-container read-container--active">
                <div className="Text text-content">
                    <h1 className="text-title">{mockText.title}</h1>
                    <a href={mockText.source} target="_blank" rel="noopener noreferrer" className="text-source">
                      View Original Source
                    </a>
                    <div className="text-divider"></div>
                    <p className="text-body">{mockText.content}</p>
                </div>
        </section>
        )}

        <div>
          {activeTab === "study" && <p>This is the Study tab.</p>}
          {activeTab === "translate" && <p>This is the Translate tab.</p>}
        </div>
      </div>
    </div>
  );
}