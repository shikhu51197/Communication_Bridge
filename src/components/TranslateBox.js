import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SelectBox } from './SelectBox';
import { success, error } from '../utils/notification';
import copy from 'copy-to-clipboard';
import { AiFillCopy } from 'react-icons/ai';
import { MdClear } from 'react-icons/md';
import "../Style/Animation.css"
import { Animation } from "./Animation";

export const TranslateBox = () => {
  const [q, setQ] = useState('');
  const [source, setSource] = useState('');
  const [target, setTarget] = useState('');
  const [output, setOutput] = useState('');

  const handleSelectChange = ({ target: { value, id } }) => {
    id === 'source' && setSource(value);
    id === 'target' && setTarget(value);
  };

  const handleGetRequest = async () => {
    if (q.length < 1) {
      setOutput('');
      return false;
    }
    if (source === '' || target === '') {
      return error('Please select language');
    }
    try {
      let res = await axios.post('', {
        q,
        source,
        target,
        format: 'text'
      });
      res = res.data.translatedText;
      setOutput(res);
    } catch (err) {
      console.error(err);
    }
  };

  const copyToClipboard = (text) => {
    copy(text);
    success('Copied to clipboard!');
  };

  const resetText = () => {
    if (q === '' && output === '') {
      error('Textbox is already empty!');
    } else {
      success('Text removed!');
      setQ('');
      setOutput('');
    }
  };

  // Debounce Function
  useEffect(() => {
    let timerID = setTimeout(() => {
      handleGetRequest();
    }, 1000);

    return () => {
      clearTimeout(timerID);
    };
  }, [q]);

  return (
    <>
    <div className="mainBox">
      <div>
        <SelectBox id={'source'} select={handleSelectChange} />
        <div className="box">
          <textarea
            onChange={(e) => {
              setQ(e.target.value);
            }}
            value={q}
            className="outputResult"
          ></textarea>
        </div>
        <div className="iconBox">
          <p>{q.length}/800</p>
          <AiFillCopy onClick={() => copyToClipboard(q)} className="icon" />
          <MdClear onClick={resetText} className="icon" />
        </div>
      </div>

      <div>
        <SelectBox id={'target'} select={handleSelectChange} />
        <div className="outputResult box">
          <p id="output">{output}</p>
        </div>
        <div className="iconBox">
          <p>{output.length}/800</p>
          <AiFillCopy onClick={() => copyToClipboard(output)} className="icon" />
        </div>
      </div>
    
    </div>
    <div className="tagLine">
                <p id="madeByMohit">Made with ❤️ by Shikha Gupta</p>
            </div>
    <Animation />

           
        </>


  );
};
