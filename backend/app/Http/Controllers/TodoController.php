<?php

namespace App\Http\Controllers;

use App\Models\Todos;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TodoController extends Controller
{
    public function index()
    {
        $todos = Todos::all();

        return response()->json([
            'results' => $todos
        ], 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        $todo = Todos::create([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
        ]);

        return response()->json([
            'message' => 'Todo created successfully',
            'todo' => $todo,
        ], 201);
    }

    public function destroy($id)
    {
        try {
            $todo = Todos::findOrFail($id);

            $todo->delete();

            return response()->json(['message' => 'Todo deleted successfully'], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error deleting Todo', 'error' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
