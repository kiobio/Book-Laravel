import {useEffect, useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";

import BookDetails from './BookDeatil2/BookDetails';
import BookReview from ??


export default function App(){
    return(
        return (
            <Switch>
                <Route path="/book/:id/review">
                       <BookReview id={ bookId } />
                </Route>
        
                <Route path="/book/:id">
        
                    <BookDetail id={ bookId } />
        
                </Route>
        
            </Switch>
        
        )
    )
}
