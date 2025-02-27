import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { GeminiContext } from "../../Context/Context";

const Main = () => {
  const {
    onSend,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(GeminiContext);

  return (
    <div className="main">
      <div className="nav">
        <div className="logo">
          <p>Gemini</p>
          <img src={assets.gemini_icon} alt="Gemini" />
        </div>
        <img className="user-img" src={assets.user_icon} alt="User icon" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev</span>
              </p>
              <p>How can I help you today?</p>
            </div>

            <div className="cards">
              <div className="card">
                <p>
                  Suggestion beautiful places to see on an upcoming road trip
                </p>
                <img src={assets.compass_icon} alt="Compass icon" />
              </div>

              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="Bulb icon" />
              </div>

              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="Message icon" />
              </div>

              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="Code icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="User icon" />
              <p>{recentPrompt}</p>
            </div>

            <div className="result-data">
              <img src={assets.gemini_icon} alt="Gemini icon" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <form
            className="search-box"
            onSubmit={(e) => {
              e.preventDefault();
              onSend(input);
            }}
          >
            <input
              type="text"
              placeholder="Enter a prompt here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div>
              <img src={assets.gemini_icon} alt="Gemini icon" />
              <img src={assets.mic_icon} alt="Mic icon" />
              {input ? (
                <img
                  onClick={() => onSend(input)}
                  src={assets.send_icon}
                  alt="Send icon"
                />
              ) : null}
            </div>
          </form>

          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
