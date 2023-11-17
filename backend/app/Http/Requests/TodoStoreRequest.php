<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TodoStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        if(request()->isMethod('post')) {
            return [
                'title' => 'required|string',
                'description' => 'required|string'
            ];
        } else {
            return [
                'title' => 'required|string',
                'description' => 'required|string'
            ];
        }
    }
     
    public function messages()
    {
        if(request()->isMethod('post')) {
            return [
                'title.required' => 'title is required!',
                'description.required' => 'description is required!'
            ];
        } else {
            return [
                'title.required' => 'title is required!',
                'description.required' => 'description is required!'
            ];   
        }
    }
}
