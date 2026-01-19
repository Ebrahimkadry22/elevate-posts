import React from "react";
import Container from "./Container";
const Header = () => {
  return (
    <div className="mt-4">
      <Container>
        <div className="flex items-center p-4 text-white rounded-md bg-white/70 backdrop-blur-md ">
          {/* left */}
          <div className="text-2xl font-bold ">
            <span>Elevate</span>
          </div>
          {/* right */}
          <div className="mx-auto">
            <span className="text-xl font-semibold">
              Frontend Advanced Bootcamp Task
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default React.memo( Header);
