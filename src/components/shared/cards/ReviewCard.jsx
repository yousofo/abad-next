import React from "react";

const ReviewCard = () => {
  return (
    <div className="card">
      <div className="card-wrapper">
        <div className="review-details">
          <img src="/media/Profil.png" alt="" />
          <div>
            <h4>أحمد البسطويسي</h4>
            <p>مصمم الرسوم البيانية</p>
          </div>
        </div>
        <p className="review-text">
          التعلم في اباد للتدريب كان مميز وسهل جدا يقدمون برامج ودورات عديدة
          ويمكنك الحضور عن طريق الفيديو والتمرين علي الشهادات الدولية المعتمدة ،
          ارشح اباد للتدريب بكل قوة
        </p>
        <div className="review-stars">
          <img src="/media/Star 1.png" alt="" />
          <img src="/media/Star 1.png" alt="" />
          <img src="/media/Star 1.png" alt="" />
          <img src="/media/Star 1.png" alt="" />
          <img src="/media/Star 1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
