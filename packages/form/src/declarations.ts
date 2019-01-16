/**
 * Values of fields in the form
 */
export interface FormValues {
    [field: string]: any;
}

/**
 * An object containing error messages whose keys correspond to FormValues.
 * Should be always be and object of strings, but any is allowed to support i18n libraries.
 */
export type FormValidity<Values> = {
    [K in keyof Values]?: ValidityState
};

/**
 * An object containing error messages whose keys correspond to FormValues.
 * Should be always be and object of strings, but any is allowed to support i18n libraries.
 */
export type FormErrors<Values> = {
    [K in keyof Values]?: string
};

/**
 * An object containing touched state of the form whose keys correspond to FormValues.
 */
export type FormTouched<Values> = {
    [K in keyof Values]?: Values[K] extends object
    ? FormTouched<Values[K]>
    : boolean
};


export interface FormState<Values> {
    focused: keyof Values;
    /** Form values */
    values: Values;
    /** map of field names to specific error for that field */
    errors: FormErrors<Values>;
    /** map of field names to specific error for that field */
    validity: FormValidity<Values>;
    /** map of field names to whether the field has been touched */
    touched: FormTouched<Values>;
    /** whether the form is currently validating */
    isValidating: boolean;
    /** whether the form is currently submitting */
    isSubmitting: boolean;
    /** Number of times user tried to submit the form */
    submitCount: number;
}

/**
 * Form computed properties. These are read-only.
 */
export interface FormComputedProps<Values> {
    /** True if any input has been touched. False otherwise. */
    readonly dirty: boolean;
    /** Result of isInitiallyValid on mount, then whether true values pass validation. */
    readonly isValid: boolean;
    /** initialValues */
    readonly initialValues: Values;
}

export interface FormHandlers<Values> {
    // handleSubmit: (e?: Event) => void;
    // handleReset: () => void;
    handleInput(field: keyof Values): ((e: Event) => void);
    handleBlur(field: keyof Values): ((e: Event) => void);
    handleFocus(field: keyof Values): ((e?: Event) => void);
}


/**
 * Base configuration/props
 */
export interface FormConfig {
    /** Tells Form to validate the form on each input's onInput event */
    validateOnInput?: boolean;
    /** Tells Form to validate the form on each input's onBlur event */
    validateOnBlur?: boolean;
    /** Tell Form if initial form values are valid or not on first render */
    isInitialValid?: boolean;
}

export interface FormUtils<Values> {
    groupProps: (key: keyof Values) => object
    inputProps: (key: keyof Values) => object,
    labelProps: (key: keyof Values) => object,
}

export type FormRenderProps<Values> = FormState<Values> &
    FormHandlers<Values> &
    FormComputedProps<Values> & 
    FormUtils<Values>;

export interface FormValidator<Values> {
    (state: FormValidatorState<Values>, utils: FormValidatorUtils): FormValidatorResult;
}

export type FormValidatorResult = void | Promise<any>;

export interface FormValidatorState<Values> {
    values: Values,
    validity: FormValidity<Values>,
    errors: FormErrors<Values>
}

export interface FormValidatorUtils {
    setCustomValidity: (message: string) => void
}