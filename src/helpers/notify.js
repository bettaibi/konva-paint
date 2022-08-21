import { toast } from 'react-toastify';

export function showMsg(msg, type) {
    toast(msg, { type });
}