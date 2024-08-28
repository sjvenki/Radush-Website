import React from "react";
import { policyRefund } from "../utils/helpers";

const ContentBlock = ({ title, detail }) => (
  <div className="mb-4">
    <h4 className="mb-1 mt-3 text-xl font-bold">{title}</h4>
    <p>{detail}</p>
  </div>
);

// Main render function
const RenderContent = ({
  data,
  titleStyle = "text-2xl font-bold tracking-wider text-center",
  renderSubtitle,
  renderList,
}) => {
  if (!data) {
    return <p className="text-center text-red-500">No data available</p>;
  }

  return (
    <div className="m-4">
      <h1 className={titleStyle}>{data.title}</h1>
      {renderSubtitle && <h2 className="text-xl font-bold">{data.subtitle}</h2>}
      {renderSubtitle &&
        data.content1.map((data, index) => <p key={index}>{data.c}</p>)}

      {renderList &&
        data.content1.map((data, index) => (
          <p key={index} className="ml-2">
            {index + 1}. {data.l}
          </p>
        ))}

      {data.content?.map((content, index) => (
        <ContentBlock
          key={index}
          title={content.title}
          detail={content.detail}
        />
      ))}
    </div>
  );
};

// Terms component
export const Terms = () => <RenderContent data={policyRefund.terms} />;

// Privacy component
export const Privacy = () => <RenderContent data={policyRefund.privacy} />;

// Refund component
export const Refund = () => (
  <RenderContent
    data={policyRefund.refund}
    renderList={true}
    renderSubtitle={true}
  />
);
