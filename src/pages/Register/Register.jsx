import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { 
  FaEye, 
  FaEyeSlash, 
  FaEnvelope, 
  FaLock, 
  FaUser,
  FaImage,
  FaExclamationTriangle,
  FaSpinner,
  FaCheck
} from "react-icons/fa";

const Register = () => {
  const { createUser, setUser, userProfile, googleLogIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // State management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false
  });

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) {
      return "Full name is required";
    }
    if (name.trim().length < 2) {
      return "Name must be at least 2 characters long";
    }
    if (name.trim().length > 50) {
      return "Name must be less than 50 characters";
    }
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
      return "Name can only contain letters and spaces";
    }
    return "";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      return "Email is required";
    }
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePhotoURL = (url) => {
    if (!url.trim()) {
      return ""; // Photo URL is optional
    }
    try {
      new URL(url);
      const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
      const hasValidExtension = validExtensions.some(ext => 
        url.toLowerCase().includes(ext)
      );
      if (!hasValidExtension) {
        return "Please provide a valid image URL (jpg, jpeg, png, gif, webp)";
      }
    } catch {
      return "Please enter a valid URL";
    }
    return "";
  };

  const validatePassword = (password) => {
    const errors = [];
    
    if (!password) {
      return "Password is required";
    }
    if (password.length < 6) {
      errors.push("at least 6 characters");
    }
    if (!/(?=.*[a-z])/.test(password)) {
      errors.push("one lowercase letter");
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      errors.push("one uppercase letter");
    }
    if (!/(?=.*\d)/.test(password)) {
      errors.push("one number");
    }
    
    if (errors.length > 0) {
      return `Password must contain ${errors.join(", ")}`;
    }
    return "";
  };

  const validateConfirmPassword = (confirmPassword, password) => {
    if (!confirmPassword) {
      return "Please confirm your password";
    }
    if (confirmPassword !== password) {
      return "Passwords do not match";
    }
    return "";
  };

  // Update password strength indicator
  const updatePasswordStrength = (password) => {
    setPasswordStrength({
      length: password.length >= 6,
      uppercase: /(?=.*[A-Z])/.test(password),
      lowercase: /(?=.*[a-z])/.test(password),
      number: /(?=.*\d)/.test(password)
    });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Update password strength for password field
    if (name === "password") {
      updatePasswordStrength(value);
    }

    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }

    // Real-time validation for confirm password
    if (name === "confirmPassword" && formData.password) {
      const confirmError = validateConfirmPassword(value, formData.password);
      if (confirmError) {
        setErrors(prev => ({ ...prev, confirmPassword: confirmError }));
      } else {
        setErrors(prev => ({ ...prev, confirmPassword: "" }));
      }
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    const nameError = validateName(formData.name);
    if (nameError) newErrors.name = nameError;

    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;

    const photoError = validatePhotoURL(formData.photoURL);
    if (photoError) newErrors.photoURL = photoError;

    const passwordError = validatePassword(formData.password);
    if (passwordError) newErrors.password = passwordError;

    const confirmPasswordError = validateConfirmPassword(formData.confirmPassword, formData.password);
    if (confirmPasswordError) newErrors.confirmPassword = confirmPasswordError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors below");
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      // Create user account
      const result = await createUser(formData.email, formData.password);
      const user = result.user;

      // Update user profile
      try {
        await userProfile({
          displayName: formData.name.trim(),
          photoURL: formData.photoURL.trim() || null
        });

        // Update local user state
        setUser({
          ...user,
          displayName: formData.name.trim(),
          photoURL: formData.photoURL.trim() || null
        });

        toast.success("Account created successfully!");
        navigate(location.state || "/");
      } catch (profileError) {
        console.error("Profile update error:", profileError);
        // Even if profile update fails, the account was created
        setUser(user);
        toast.success("Account created successfully!");
        navigate(location.state || "/");
      }
    } catch (error) {
      console.error("Registration error:", error);
      
      // Handle specific Firebase auth errors
      let errorMessage = "Registration failed. Please try again.";
      
      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage = "An account with this email already exists";
          setErrors({ email: errorMessage });
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address";
          setErrors({ email: errorMessage });
          break;
        case "auth/weak-password":
          errorMessage = "Password is too weak";
          setErrors({ password: errorMessage });
          break;
        case "auth/network-request-failed":
          errorMessage = "Network error. Please check your connection";
          break;
        case "auth/too-many-requests":
          errorMessage = "Too many attempts. Please try again later";
          break;
        default:
          errorMessage = error.message || "An unexpected error occurred";
      }
      
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Google registration
  const handleGoogleLogIn = async () => {
    setIsGoogleLoading(true);
    setErrors({});

    try {
      const result = await googleLogIn();
      toast.success("Google registration successful!");
      navigate(location.state || "/");
    } catch (error) {
      console.error("Google registration error:", error);
      
      let errorMessage = "Google registration failed. Please try again.";
      
      switch (error.code) {
        case "auth/popup-closed-by-user":
          errorMessage = "Registration cancelled";
          break;
        case "auth/popup-blocked":
          errorMessage = "Popup blocked. Please allow popups and try again";
          break;
        case "auth/network-request-failed":
          errorMessage = "Network error. Please check your connection";
          break;
        case "auth/account-exists-with-different-credential":
          errorMessage = "An account already exists with this email";
          break;
        default:
          errorMessage = error.message || "Google registration failed";
      }
      
      toast.error(errorMessage);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center py-8 px-4">
      <Helmet>
        <title>Register - Eduverse</title>
        <meta name="description" content="Create your Eduverse account" />
      </Helmet>
      
      <div className="w-full max-w-md">
        <div className="bg-base-100 rounded-2xl shadow-xl p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-base-content mb-2">
              Join Eduverse!
            </h1>
            <p className="text-base-content/70">
              Create your account to start learning
            </p>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Full Name *</span>
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`input input-bordered w-full pl-10 ${
                    errors.name ? 'input-error' : ''
                  }`}
                  placeholder="Enter your full name"
                  disabled={isLoading}
                />
              </div>
              {errors.name && (
                <div className="flex items-center gap-2 mt-1 text-error text-sm">
                  <FaExclamationTriangle />
                  <span>{errors.name}</span>
                </div>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Email Address *</span>
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`input input-bordered w-full pl-10 ${
                    errors.email ? 'input-error' : ''
                  }`}
                  placeholder="Enter your email"
                  disabled={isLoading}
                />
              </div>
              {errors.email && (
                <div className="flex items-center gap-2 mt-1 text-error text-sm">
                  <FaExclamationTriangle />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>

            {/* Photo URL Field */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Photo URL (Optional)</span>
              </label>
              <div className="relative">
                <FaImage className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" />
                <input
                  type="url"
                  name="photoURL"
                  value={formData.photoURL}
                  onChange={handleInputChange}
                  className={`input input-bordered w-full pl-10 ${
                    errors.photoURL ? 'input-error' : ''
                  }`}
                  placeholder="Enter photo URL"
                  disabled={isLoading}
                />
              </div>
              {errors.photoURL && (
                <div className="flex items-center gap-2 mt-1 text-error text-sm">
                  <FaExclamationTriangle />
                  <span>{errors.photoURL}</span>
                </div>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Password *</span>
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`input input-bordered w-full pl-10 pr-10 ${
                    errors.password ? 'input-error' : ''
                  }`}
                  placeholder="Create a password"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-base-content/50 hover:text-base-content"
                  disabled={isLoading}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              
              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="mt-2 space-y-1">
                  <div className="text-xs text-base-content/70">Password strength:</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className={`flex items-center gap-1 ${passwordStrength.length ? 'text-success' : 'text-base-content/50'}`}>
                      <FaCheck className={passwordStrength.length ? 'opacity-100' : 'opacity-30'} />
                      6+ characters
                    </div>
                    <div className={`flex items-center gap-1 ${passwordStrength.uppercase ? 'text-success' : 'text-base-content/50'}`}>
                      <FaCheck className={passwordStrength.uppercase ? 'opacity-100' : 'opacity-30'} />
                      Uppercase
                    </div>
                    <div className={`flex items-center gap-1 ${passwordStrength.lowercase ? 'text-success' : 'text-base-content/50'}`}>
                      <FaCheck className={passwordStrength.lowercase ? 'opacity-100' : 'opacity-30'} />
                      Lowercase
                    </div>
                    <div className={`flex items-center gap-1 ${passwordStrength.number ? 'text-success' : 'text-base-content/50'}`}>
                      <FaCheck className={passwordStrength.number ? 'opacity-100' : 'opacity-30'} />
                      Number
                    </div>
                  </div>
                </div>
              )}
              
              {errors.password && (
                <div className="flex items-center gap-2 mt-1 text-error text-sm">
                  <FaExclamationTriangle />
                  <span>{errors.password}</span>
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Confirm Password *</span>
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`input input-bordered w-full pl-10 pr-10 ${
                    errors.confirmPassword ? 'input-error' : 
                    formData.confirmPassword && !errors.confirmPassword && formData.password === formData.confirmPassword ? 'input-success' : ''
                  }`}
                  placeholder="Confirm your password"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-base-content/50 hover:text-base-content"
                  disabled={isLoading}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.confirmPassword && (
                <div className="flex items-center gap-2 mt-1 text-error text-sm">
                  <FaExclamationTriangle />
                  <span>{errors.confirmPassword}</span>
                </div>
              )}
              {formData.confirmPassword && !errors.confirmPassword && formData.password === formData.confirmPassword && (
                <div className="flex items-center gap-2 mt-1 text-success text-sm">
                  <FaCheck />
                  <span>Passwords match</span>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary w-full mt-6"
            >
              {isLoading ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="divider my-6">OR</div>

          {/* Google Registration */}
          <button
            onClick={handleGoogleLogIn}
            disabled={isGoogleLoading || isLoading}
            className="btn btn-outline w-full"
          >
            {isGoogleLoading ? (
              <>
                <FaSpinner className="animate-spin mr-2" />
                Creating Account...
              </>
            ) : (
              <>
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </>
            )}
          </button>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-base-content/70">
              Already have an account?{" "}
              <Link
                to="/login"
                state={location?.state}
                className="link link-primary font-medium"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
