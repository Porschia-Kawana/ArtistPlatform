import "./error.css";

function ErrorComponent({ status, message }: { status: number, message: string; }) {
    return (
        <div className="Error">
            <div className="Error__container">
                <div className="Error__text__status">{status}</div>
                <div className="Error__text__message">{message}</div>
            </div>
        </div>
    );
}
export default ErrorComponent;
