<?php

namespace Lib;


use Valitron\Validator;

class Validation {

    public static $name = 'Validation';

    /**
     * @param $fields
     * @return bool
     */
    public function signupValidation($fields = array())
    {
        $errors = null;

        if(isset($fields->name) && $this->applyValidationRules('notEmpty', $fields->name) == false){
            $errors['name'] = 'Name must be required';
        }

        if(isset($fields->email) && $this->applyValidationRules('notEmpty', $fields->email) == false){
            $errors['email'] = 'Email must be required';
        }

        if(isset($fields->email) && $this->applyValidationRules('email', $fields->email) == false){
            $errors['email'] = 'Please provide valid email address';
        }

        if(isset($fields->password) && $this->applyValidationRules('notEmpty', $fields->password) == false){
            $errors['password'] = 'Password must be required';
        }

        if(isset($fields->cPassword) && $this->applyValidationRules('notEmpty', $fields->cPassword) == false){
            $errors['cPassword'] = 'Confirm password must be required';
        }

        if(isset($fields->cPassword) && $this->applyValidationRules('matchPassword', $fields->cPassword, $fields) == false){
            $errors['cPassword'] = 'Password and confirm password does not matched';
        }

        return $errors;

        /**
         * TODO validation script should write in proper way
         */
    }
    /**
     * @param $fields
     * @return bool
     */
    public function loginValidation($fields = array())
    {
        return true;
        /**
         * TODO validation script for Login need to write here.
         */
    }
    /**
     * @param $field
     * @param $value
     * @param $rules
     * @return array
     */
    public function dataValidation($field, $value, $rules)
    {
        foreach($rules as $rule){
            $rulesName = $rule['rule'];
            $message = $rule['message'];
            if($this->applyValidationRules($rulesName, $value) == false){
                $response = array(
                    'code' => 0,
                    'message' => $message
                );
                return $response;
            }
        }
    }

    /**
     * @param $rule
     * @param $value
     * @return bool
     */
    private function applyValidationRules($rule, $value, $fields = array())
    {
        /**
         * @TODO all validation script should be written here.
         */
        if($rule == 'notEmpty'){
            $v = new Validator(array('name' => $value));

            $v->rule('required', 'name');
            if($v->validate()){
                return true;
            }
            return false;
        }

        elseif($rule == 'email'){
            $v = new Validator(array('email' => $value));
            $v->rule('email', 'email');
            if($v->validate()){
                return true;
            }
            return false;
        }

        elseif($rule == 'isUnique'){
            return true;
        }

        elseif($rule == 'matchPassword'){

            if(isset($fields->password) && $value == $fields->password)
            {
                return true;
            }

            return false;
        }

        else{
            return false;
        }
    }
}