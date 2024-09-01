import * as React from "react";
import PropTypes from "prop-types";

import Dialog from "@mui/material/Dialog";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { Rating } from "@mui/material";
import { useState } from "react";
import { router } from "@inertiajs/react";

const emails = ["username@gmail.com", "user02@gmail.com"];

export default function RatingDialog(props) {
    const { onClose, open, paketsoal } = props;
    const [rating, setRating] = useState(null);
    const [comment, setComment] = useState(null);

    const handleClose = () => {
        onClose();
    };

    const labels = {
        1: "Useless",
        2: "Poor",
        3: "Ok",
        4: "Good",
        5: "Excellent",
    };
    function getLabelText(value) {
        return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
    }

    const handleListItemClick = (value) => {
        onClose(value);
    };

    const submit = () => {
        handleClose();
        router.post("/rating/save", {
            rating: rating,
            comment: comment,
            paketsoal_id: paketsoal.id,
        });
        console.log("rating :", rating, "comment:", comment);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <div className="flex flex-col p-6 gap-y-3">
                <div className="flex flex-col items-center justify-center gap-y-3">
                    <Rating
                        value={rating}
                        onChange={(event, newValue) => {
                            setRating(newValue);
                        }}
                    />
                    <textarea
                        className="min-w-60"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Masukkan komentar anda..."
                    ></textarea>
                </div>

                <div className="flex gap-x-3 flex-row justify-end">
                    <SecondaryButton onClick={() => handleClose()}>
                        Batal
                    </SecondaryButton>
                    <PrimaryButton onClick={submit}>Kirim</PrimaryButton>
                </div>
            </div>
        </Dialog>
    );
}
RatingDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};
