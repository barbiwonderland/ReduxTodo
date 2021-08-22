import React from "react";

const footer = () => {
  return (
    <>
      <footer class="container-fluid bg-transparent fixed-bottom mt-5 mb-1 p-1 ">
        <div class="row text-white mx-auto text-center">
          <div class="col-12 ">
            Developed by
            <a class="text-light ms-1" href="https://github.com/barbiwonderland">
               Barbi Wonderland
            </a>
          </div>
          <div class="col-md-12">
            Copyright <i class="fa fa-copyright" aria-hidden="true"></i> 2021
            All Rights reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
