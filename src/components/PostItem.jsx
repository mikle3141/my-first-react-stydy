import React from 'react';

const PostItem = () => {
    return (
        <dif className="post">
            <div className="post__content">
                <strong>1. Javascript</strong>
                <div>
                    JavaScript - язык программирования
                </div>
            </div>
            <div className="post__btns">
                <button>Удалить</button>
            </div>
        </dif>
    );
};

export default PostItem;