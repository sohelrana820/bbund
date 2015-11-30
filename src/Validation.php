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
        if(isset($fields->name) && $this->applyValidationRules('notEmpty', $fields->name) == false){
            $response = array(
                'code' => 0,
                'message' => 'Sorry, name must be required'
            );
            return $response;
        }

        if(isset($fields->email) && $this->applyValidationRules('email', $fields->email) == false){
            $response = array(
                'code' => 0,
                'message' => 'Sorry, invalid email address'
            );
            return $response;
        }

        $response = array(
            'code' => 1,
            'message' => null
        );


        return $response;
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
    private function applyValidationRules($rule, $value)
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

        else{
            return false;
        }
    }
}