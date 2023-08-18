import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css'
import { Trash, ThumbsUp } from "@phosphor-icons/react";

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function deleteComment() {
        onDeleteComment(content)
    }

    function likeComment() {
        setLikeCount((previousLikeCountValue) => {
            return previousLikeCountValue + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar notBorder src="https://github.com/lucasmiko.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas Mikó</strong>
                            <time title='14 de Agosto às 12:00h' dateTime='2023-05-14 12:00:00'>Cerca de 1h atrás</time>

                        </div>

                        <button onClick={deleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={likeComment}>
                        <ThumbsUp size={20} />
                        Apludir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}