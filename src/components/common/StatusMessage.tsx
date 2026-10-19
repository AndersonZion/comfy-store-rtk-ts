import "./StatusMessage.css";

interface Props {
  message: string;
  type?: "error" | "loading";
}

export function StatusMessage({ message, type = "loading" }: Props) {
  return (
    <div
      className={`status status-${type}`}
      role={type === "error" ? "alert" : "status"}
      aria-live={type === "error" ? "assertive" : "polite"}
    >
      {message}
    </div>
  );
}
