import {useSelector} from "react-redux"

const ShowAuthor = ({userId}) => {
   const author = useSelector(state => state.users.find(user => user.id === userId))

   return (
       <span>
          {author ? author.fullname : "anonymous"} &nbsp;
       </span>
   )
};
export default ShowAuthor;