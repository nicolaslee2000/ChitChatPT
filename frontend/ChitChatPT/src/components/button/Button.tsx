import './Button.css'

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = 'button',
    variant = 'primary',
    size = 'medium',
    disabled = false,
}) => {
    return (
        <button type={type}
        onClick={onClick}
        className={`button ${variant} ${size}`}
        disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;