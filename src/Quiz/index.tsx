import React from 'react';
import './style/quiz.css';
export interface QuizProps {
  title: string,
  keyword?: string,
  annotations?: 'normal' | 'underline' | 'strong' | 'italic',
  audio?: string,
  image?: string,
  direction?: 'left' | 'center' | 'right',
}

const Quiz: React.FC<QuizProps> = (props) => {
  const {
    title,
    keyword,
    annotations,
    audio,
    image,
    direction
  } = props;
  const styles: React.CSSProperties = {
    textAlign: direction || 'center',
  };

  if (keyword && title.includes(keyword)) {
    let keywordStyle = 'normal';
    if (annotations) {
      keywordStyle = annotations;
    }
    const parts = title.split(keyword);
    console.log()
    return (
      <div className="mchoice-quiz" style={styles}>
        {
          image && <div className='image'>
            <img src={image} alt="题目图片" />
          </div>
        }
        {
          audio && <div className='audio'>
            <audio controls src={audio} ></audio>
          </div>
        }
        <p>
          {parts.map((part, index) => (
            <React.Fragment key={index}>
              {part}
              {index !== parts.length - 1 && <span className={keywordStyle}>{keyword}</span>}
            </React.Fragment>
          ))}
        </p>
      </div>
    );
  }
  return <div className="mchoice-quiz" style={styles}>
    {
      image && <div className='image'>
        <img src={image} alt="题目图片" />
      </div>
    }
    {
      audio && <div className='audio'>
        <audio controls src={audio} ></audio>
      </div>
    }
    <p>{title}</p>
  </div>;
};

export default Quiz;
