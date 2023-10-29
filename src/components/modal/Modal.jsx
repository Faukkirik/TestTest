import React from 'react';
import style from './Modal.module.scss'
import {Button} from "../button/Button";

export const Modal = ({ isOpen, onClose, text }) => {
    if (!isOpen) {
        return null;
    }
    return (
        <div className={style['modal-overlay']}>
            <div className={style['modal-content']}>
                <div className={style['modal-text']}>{text}</div>
                <div className={style['modal-close']}>
                    <Button
                        onClick={onClose}
                        nameButton={'Close'}
                        variant={'secondary'}
                    />
                </div>
            </div>
        </div>
    );
};
