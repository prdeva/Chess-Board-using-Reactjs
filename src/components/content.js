import React from 'react';

import './style.css';
import { FaChessRook } from "react-icons/fa6";
import { FaChessKnight } from "react-icons/fa6";
import { FaChessBishop } from "react-icons/fa";
import { FaChessKing } from "react-icons/fa6";
import { FaChessQueen } from "react-icons/fa";
import { FaChessPawn } from "react-icons/fa6";
import { LiaChessPawnSolid } from "react-icons/lia";
import { LiaChessRookSolid } from "react-icons/lia";
import { LiaChessKnightSolid } from "react-icons/lia";
import { LiaChessBishopSolid } from "react-icons/lia";
import { FaRegChessQueen } from "react-icons/fa6";
import { FaRegChessKing } from "react-icons/fa6";


class Content extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Chess Board</h3>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <div className="size">
            <div className="align">
              <div className="white"><FaChessRook className='one' /></div>
              <div className="black"><FaChessKnight className='one' /></div>
              <div className="white"><FaChessBishop className='one'/></div>
              <div className="black"><FaChessKing className='one'/></div>
              <div className="white"><FaChessQueen className='one' /></div>
              <div className="black"><FaChessBishop className='one'/></div>
              <div className="white"><FaChessKnight className='one'/></div>
              <div className="black"><FaChessRook className='one'/></div>
            </div>
            <div className="align">
              <div className="black"><FaChessPawn className='one'/></div>
              <div className="white"><FaChessPawn className='one'/></div>
              <div className="black"><FaChessPawn className='one'/></div>
              <div className="white"><FaChessPawn className='one'/></div>
              <div className="black"><FaChessPawn className='one'/></div>
              <div className="white"><FaChessPawn className='one'/></div>
              <div className="black"><FaChessPawn className='one'/></div>
              <div className="white"><FaChessPawn className='one'/></div>
            </div>
            <div className="align">
              <div className="white"></div>
              <div className="black"></div>
              <div className="white"></div>
              <div className="black"></div>
              <div className="white"></div>
              <div className="black"></div>
              <div className="white"></div>
              <div className="black"></div>
            </div>
            <div className="align">
              <div className="black"></div>
              <div className="white"></div>
              <div className="black"></div>
              <div className="white"></div>
              <div className="black"></div>
              <div className="white"></div>
              <div className="black"></div>
              <div className="white"></div>
            </div>
            <div className="align">
              <div className="white"></div>
              <div className="black"></div>
              <div className="white"></div>
              <div className="black"></div>
              <div className="white"></div>
              <div className="black"></div>
              <div className="white"></div>
              <div className="black"></div>
            </div>
            <div className="align">
              <div className="black"></div>
              <div className="white"></div>
              <div className="black"></div>
              <div className="white"></div>
              <div className="black"></div>
              <div className="white"></div>
              <div className="black"></div>
              <div className="white"></div>
            </div>
            <div className="align">
              <div className="white"><LiaChessPawnSolid className='one'/></div>
              <div className="black"><LiaChessPawnSolid className='one'/></div>
              <div className="white"><LiaChessPawnSolid className='one'/></div>
              <div className="black"><LiaChessPawnSolid className='one'/></div>
              <div className="white"><LiaChessPawnSolid className='one'/></div>
              <div className="black"><LiaChessPawnSolid className='one'/></div>
              <div className="white"><LiaChessPawnSolid className='one'/></div>
              <div className="black"><LiaChessPawnSolid className='one' /></div>
            </div>
            <div className="align">
              <div className="black"><LiaChessRookSolid className='one' /></div>
              <div className="white"><LiaChessKnightSolid className='one'/></div>
              <div className="black"><LiaChessBishopSolid className='one'/></div>
              <div className="white"><FaRegChessQueen className='one'/></div>
              <div className="black"><FaRegChessKing className='one'/></div>
              <div className="white"><LiaChessBishopSolid className='one' /></div>
              <div className="black"><LiaChessKnightSolid className='one'/></div>
              <div className="white"><LiaChessRookSolid className='one'/></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
