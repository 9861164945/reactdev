import { useState } from "react";
//import Menu from "./Menu"; // Assuming Menu is the default export from Menu.js

export default function Comments() {
    let [comments, setComments] = useState([
        {
            username: "@Sambit",
            remark: "Great Job",
            rating: 4,
        }
    ]);

    let addNewComment = (newComment) => {
        setComments((currComments) => [
            ...currComments, newComment
        ]);
        console.log("added new Comment");
    };

    return (
        <>
            <div>
                <h2>All comments</h2>

                {comments.map((comment, idx) => (
                    <div key={idx} className="comment">
                        <span>{comment.remark}</span>
                        <span>( rating={comment.rating} )</span>
                        <p>{comment.username}</p>
                    </div>
                ))}

            </div>
            <Menu addNewComment={addNewComment}/>
        </>
    );
}
