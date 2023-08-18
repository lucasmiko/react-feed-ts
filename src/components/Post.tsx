import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostPros {
post: PostType;
}

export function Post({ post }: PostPros) {
    const [comments, setComments] = useState([
        'As a front-end React developer, I love how clean and modular the code is in this project!',
        'This is a static React application created to practice fundamental React concepts.',
        'Regarding the application, please feel free to share your suggestions and insights for improvements. The exchange of ideas is crucial for continuous learning and enhancement!',
    ]);

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR, });

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    function createNewComment(event: FormEvent) {
        event.preventDefault()
        setComments([...comments, newCommentText]);
        setNewCommentText('')
    };

    function newCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function newCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Este campo é obrigatório!')
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(commentsWithoutDeletedOne);
    }
    
    const isNewCommentEmpty = newCommentText.length == 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {post.content.map(item => {
                    if (item.type == 'paragraph') {
                        return <p key={item.content}>{item.content}</p>;
                    } else if (item.type == 'link') {
                        return <p key={item.content}><a href='#'>{item.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={createNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                name='comment'
                placeholder='Deixe um comentário'
                value={newCommentText}
                onChange={newCommentChange}
                onInvalid={newCommentInvalid}
                required/>
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                    <Comment 
                        key={comment}
                        content={comment}
                        onDeleteComment={() => deleteComment(comment)}
                    />)
                })}
            </div>
        </article>
    );
}