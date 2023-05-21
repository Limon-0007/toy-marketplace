import React from "react";
import UseTitle from "../../Hooks/UseTitle";

const Blogs = () => {
  UseTitle("Blogs")
  return (
    <div>
      <h2 className="text-center font-bold text-3xl mt-4 mb-8">Blogs!</h2>
      {/* question 1 */}
      <div className="collapse text-center">
        <input type="checkbox" />
        <div className="collapse-title text-lg px-10 font-medium">
          Q1. What is an access token and refresh token? <br /> How do they work and
          where should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p className="font-semibold px-8">
            Refresh tokens allow you to balance your users access needs with
            your organization`s security practices. Access tokens help users get
            the resources they need to complete their tasks, but such tokens can
            also expose your organization to data compromise or other malicious
            actions if a hacker is able to steal them.
          </p>
        </div>
      </div>
      {/* question 2 */}
      <div className="collapse text-center">
        <input type="checkbox" />
        <div className="collapse-title text-lg px-10 font-medium">
          Q2. Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
        <p className="font-semibold px-8">
        SQL and NoSQL differ in whether they are relational (SQL) or non-relational (NoSQL), whether their schemas are predefined or dynamic, how they scale, the type of data they include and whether they are more fit for multi-row transactions or unstructured data.
          </p>
        </div>
      </div>
      {/* question 3 */}
      <div className="collapse text-center">
        <input type="checkbox" />
        <div className="collapse-title text-lg px-10 font-medium">
          Q3. What is express js? What is Nest JS?
        </div>
        <div className="collapse-content">
          <p className="font-semibold px-8">NestJS is a framework for developing modern server-side applications in Node. js. It is built on top of Express, a popular server framework for Node. js, and provides a robust set of features for building efficient, scalable, and enterprise-grade applications.</p>
        </div>
      </div>
      {/* question 4 */}
      <div className="collapse text-center mb-8">
        <input type="checkbox" />
        <div className="collapse-title text-lg px-10 font-medium">
          Q4. What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content">
          <p className="font-semibold px-8">Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
