import React, { useEffect, useState } from "react";
import ActorBox from "../../boxForList";
import PostService from "../../../API/PostService";
import { ThreeDots } from "react-loader-spinner";
import { motion } from "framer-motion";

import "../../../style/page.scss";
import { validator } from "../../utils/validator";

const HomePage = () => {
  const [actors, setActors] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetchActors();
  }, []);

  function listVal(l) {
    for (let i in l) {
      l[i]["agetype"] = validator(l[i].age);
    }
    return l;
  }

  async function fetchActors() {
    const a = await PostService.getAllActors();
    setActors(listVal(a));
    setTimeout(() => {
      setLoader(true);
    }, 1000);
  }

  return (
    <motion.div
      className="pages-box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      {actors ? (
        <div className="foto-boxes">
          <div className="actor-kase">
            {actors.map((aa) => {
              return (
                <>{aa.enable ? <ActorBox obj={aa} key={aa.id} /> : null}</>
              );
            })}
          </div>
        </div>
      ) : (
        <>
          {loader ? (
            <div className="puff-container">
              <ThreeDots
                height="100"
                width="100"
                radius={1}
                color="#7e7a79"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          ) : null}
        </>
      )}
    </motion.div>
  );
};

export default HomePage;
