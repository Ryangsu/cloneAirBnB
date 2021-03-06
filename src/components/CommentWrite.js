import React from 'react';

import Grid from '../elements/Grid';
import Input from '../elements/Input';

import { actionCreators as postActions } from '../redux/modules/post';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';
import styled from 'styled-components';


const CommentWrite = ({home_id}, props) => {
  const [comment, setComment] = React.useState('');
  const dispatch = useDispatch(null);
 
  const user_nick = useSelector((state) => state.user.user.user_nick);

  React.useEffect(() => {
    
    dispatch(userActions.loginCheckDB());
    return;
  }, []);

  const _setComment = (e) => {
    setComment(e.target.value);
  };

  const writeComment = (home_id, comment, user_nick) => {
    dispatch(postActions.addCommentDB(home_id, comment, user_nick))
    setComment('');
    };
    

  return (
    <React.Fragment>
      <Grid is_flex padding="1vh 0 0">
        <Input
          placeholder="내용을 입력해주세요 :)"
          value={comment}
          _onChange={(e) => {
            _setComment(e);
          }}
        ></Input>
        <WButton
          width="50px"
          margin="0px 2px"
          onClick={() => {
            writeComment(home_id, comment, user_nick);
          }}
          border_radius="5px"
        >
          작성
        </WButton>
      </Grid>
    </React.Fragment>
  );
};

const WButton =styled.button`
    border-radius: 40px;
    border: 1px solid rgb(235,235,235);
    background-color: rgb(235,235,235);
    margin-left : 10px;
    padding: 10px;
    width : 100px;
    color: rgb(34,34,34);
    font-size: 15px;
    right: 2px;
    cursor: pointer;
`

export default CommentWrite;