import { forwardRef, useRef } from "react";
import { FaGithub, FaCode, FaDiscord, FaTwitter } from "react-icons/fa";

export const Ui = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <>
      <div className="fps" ref={ref}>
        fps:
      </div>

      <div className="my-tag">
        <span></span>
        <span></span>
        <span>
          <a target="_blank" href="https://github.com/twilight-project">
            <FaGithub size={24} />
          </a>

          <a target="_blank" href="https://discord.gg/9JJ9sxp">
            <FaDiscord size={24} />
          </a>
        </span>
      </div>
    </>
  );
});
