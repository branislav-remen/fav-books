import { type FC } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import type { Book } from "../../store/interfaces.ts";
import styles from "./card-modal.module.scss";

interface CardModalProps {
    open: boolean;
    onClose: () => void;
    book: Book;
}

/** Modal window to show card details */
export const CardModal: FC<CardModalProps> = ({ open, onClose, book }) => {
    const { title, author, description, image } = book;

    return (
        <Modal open={open} onClose={onClose}>
            <Box className={styles.modalBox}>
                <IconButton
                    onClick={onClose}
                    className={styles.closeButton}
                    aria-label="Close"
                >
                    <CloseIcon />
                </IconButton>

                <Typography
                    variant="overline"
                    className={styles.subtitle}
                >
                    Moja obľúbená kniha
                </Typography>

                <Box className={styles.imageWrapper}>
                    <img
                        src={image}
                        alt={title}
                        className={styles.modalImage}
                    />
                </Box>

                <Typography variant="h5" component="h2" className={styles.title}>
                    {title}
                </Typography>

                <Typography variant="body2" className={styles.labelValue}>
                    <span className={styles.label}>Napísal(a):</span>
                    <span className={styles.value}>{author}</span>
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle2" className={styles.sectionTitle}>
                    Popis
                </Typography>
                <Typography variant="body1" className={styles.description}>
                    {description}
                </Typography>
            </Box>
        </Modal>
    );
};