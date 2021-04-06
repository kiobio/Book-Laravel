<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Book;

class BookController extends Controller
{
    public function index()
    {
        return view('book.index');
    }

    /*handle submission of the review form*/
public function review(Request $request){
    $rating = $request -> input('rating');
    $text = $request->input('text');

    $review = new Review;
    $review->book_id = $book_id;
    $review->user_id = 1;
    $review->rating = $request->input('rating');
    $review->text = $request->input('text');
    $review->save();
    return [
        'status' => 'success';
        'message'
    ];
    
}
}

