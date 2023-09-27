import React from "react";

const PostSection = () => {
  return (
    <section className=" text-gega-grey ">
      <div className="container px-10 lg:px-0">
        <h2 className="text-gega-red">
          <a href=""> Popular Posts</a>
        </h2>
        {/* grid-area */}
        <div className="grid grid-cols-6 gap-10">
          {/* items-1 */}
          <div className="col-span-6 md:col-span-3 border border-gega-red">
            <div className="border-b border-gega-red p-4 flex items-center justify-between">
              <h3 className="">Lorem, ipsum dolor.</h3>
              <img
                src="../images/userava1.jpg"
                alt=""
                className="rounded-full"
              />
            </div>
            <p className="p-4 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
              rem culpa sequi debitis nobis quisquam rerum autem perspiciatis
              iure expedita.
            </p>
            <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-mono text-xs">
              <p>ON DEC 17,2022</p>
              <div className="flex items-center justify-center space-x-1 ">
                <i className="fa-regular fa-comment"></i>
                <p>12</p>
                <i className="fa-regular fa-heart "></i>
                <p>09</p>
              </div>
              asdsad
            </div>
          </div>
          {/* items-2 */}
          <div className="col-span-6 md:col-span-3 border border-gega-red">
            <div className="border-b border-gega-red p-4 flex items-center justify-between">
              <h3 className="">Lorem, ipsum dolor.</h3>
              <img
                src="../images/userava1.jpg"
                alt=""
                className="rounded-full"
              />
            </div>
            <p className="p-4 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
              rem culpa sequi debitis nobis quisquam rerum autem perspiciatis
              iure expedita.
            </p>
            <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-mono text-xs">
              <p>ON DEC 17,2022</p>
              <div className="flex items-center justify-center space-x-1 ">
                <i className="fa-regular fa-comment"></i>
                <p>12</p>
                <i className="fa-regular fa-heart "></i>
                <p>09</p>
              </div>
              asdsad
            </div>
          </div>
          {/* items-3 */}
          <div className="col-span-6 md:col-span-3 lg:col-span-2 border border-gega-red">
            <div className="border-b border-gega-red p-4 flex items-center justify-between">
              <h3 className="">Lorem, ipsum dolor.</h3>
              <img
                src="../images/userava1.jpg"
                alt=""
                className="rounded-full"
              />
            </div>
            <p className="p-4 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
              rem culpa sequi debitis nobis quisquam rerum autem perspiciatis
              iure expedita.
            </p>
            <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-mono text-xs">
              <p>ON DEC 17,2022</p>
              <div className="flex items-center justify-center space-x-1 ">
                <i className="fa-regular fa-comment"></i>
                <p>12</p>
                <i className="fa-regular fa-heart "></i>
                <p>09</p>
              </div>
              asdsad
            </div>
          </div>

          {/* items-4  */}
          <div className="col-span-6 md:col-span-3 lg:col-span-2  border border-gega-red">
            <div className="border-b border-gega-red p-4 flex items-center justify-between">
              <h3 className="">Lorem, ipsum dolor.</h3>
              <img
                src="../images/userava1.jpg"
                alt=""
                className="rounded-full"
              />
            </div>
            <p className="p-4 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
              rem culpa sequi debitis nobis quisquam rerum autem perspiciatis
              iure expedita.
            </p>
            <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-mono text-xs">
              <p>ON DEC 17,2022</p>
              <div className="flex items-center justify-center space-x-1 ">
                <i className="fa-regular fa-comment"></i>
                <p>12</p>
                <i className="fa-regular fa-heart "></i>
                <p>09</p>
              </div>
              asdsad
            </div>
          </div>
              {/* items-5 */}
              <div className="lg:block lg:col-span-2  border border-gega-red hidden ">
            <div className="border-b border-gega-red p-4 flex items-center justify-between">
              <h3 className="">Lorem, ipsum dolor.</h3>
              <img
                src="../images/userava1.jpg"
                alt=""
                className="rounded-full"
              />
            </div>
            <p className="p-4 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
              rem culpa sequi debitis nobis quisquam rerum autem perspiciatis
              iure expedita.
            </p>
            <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-mono text-xs">
              <p>ON DEC 17,2022</p>
              <div className="flex items-center justify-center space-x-1 ">
                <i className="fa-regular fa-comment"></i>
                <p>12</p>
                <i className="fa-regular fa-heart "></i>
                <p>09</p>
              </div>
              asdsad
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostSection;
