import React from "react";
import "./PageHeader.scss";
import { navigateToPage } from "../utils";
import { useHistory } from "react-router";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }: PageHeaderProps) => {
  const history = useHistory();
  return (
    <div className="posts-header">
      <button onClick={(e: any) => navigateToPage(e, "/", history)}>
        <i className="arrow left"></i>
        Home
      </button>
      <h1>{title}</h1>
      <button onClick={(e: any) => navigateToPage(e, "/contact", history)}>
        Contact me
      </button>
    </div>
  );
};

export default PageHeader;
