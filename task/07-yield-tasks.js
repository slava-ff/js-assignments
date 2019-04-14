'use strict';

/********************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield        *
 *                                                                                          *
 ********************************************************************************************/


/**
 * Returns the lines sequence of "99 Bottles of Beer" song:
 *
 *  '99 bottles of beer on the wall, 99 bottles of beer.'
 *  'Take one down and pass it around, 98 bottles of beer on the wall.'
 *  '98 bottles of beer on the wall, 98 bottles of beer.'
 *  'Take one down and pass it around, 97 bottles of beer on the wall.'
 *  ...
 *  '1 bottle of beer on the wall, 1 bottle of beer.'
 *  'Take one down and pass it around, no more bottles of beer on the wall.'
 *  'No more bottles of beer on the wall, no more bottles of beer.'
 *  'Go to the store and buy some more, 99 bottles of beer on the wall.'
 *
 * See the full text at
 * http://99-bottles-of-beer.net/lyrics.html
 *
 * NOTE: Please try to complete this task faster then original song finished:
 * https://www.youtube.com/watch?v=Z7bmyjxJuVY   :)
 *
 *
 * @return {Iterable.<string>}
 *
 */
function* get99BottlesOfBeer() {
    let song = [];
    for (let i = 99; i>=0; i--) {
        let string = '';
        let btl = 'bottle';
        if (i!=1) btl = btl.concat('s');
        if (i<99) {
            let string2 = '';
            let phrase3 = 'Take one down and pass it around, ';
            let phrase4 = ' of beer on the wall.';
            if (i!=0) string2 = string2.concat(phrase3).concat(i).concat(' ').concat(btl).concat(phrase4);
            else string2 = string2.concat(phrase3).concat('no more ').concat(btl).concat(phrase4); 
            song.push(string2);
        }
        let phrase1 = ' of beer on the wall, ';
        let phrase2 = ' of beer.';
        if (i!=0) string = string.concat(i).concat(' ').concat(btl).concat(phrase1).concat(i).concat(' ').concat(btl).concat(phrase2);
        else {
            string = string.concat('No more ').concat(btl).concat(phrase1).concat('no more ').concat(btl).concat(phrase1);
            song.push(string);
            string = '';
            string = string.concat('Go to the store and buy some more, ').concat('99 ').concat(btl).concat(' of beer on the wall.');
        }
        song.push(string);
        
    }
    console.log(song);
    return song;

    /*
    let res = [];
    let song = '';
    for (let i = 99; i>=0; i--) {
        let string = '';
        let btl = 'bottle';
        if (i!=1) btl = btl.concat('s');
        if (i<99) {
            let string2 = '';
            let phrase3 = 'Take one down and pass it around, ';
            let phrase4 = ' of beer on the wall.';
            if (i!=0) string2 = string2.concat(phrase3).concat(i).concat(' ').concat(btl).concat(phrase4).concat('\n');
            else string2 = string2.concat(phrase3).concat('no more ').concat(btl).concat(phrase4).concat('\n');
            song = song.concat(string2);
        }
        let phrase1 = ' of beer on the wall, ';
        let phrase2 = ' of beer.';
        if (i!=0) string = string.concat(i).concat(' ').concat(btl).concat(phrase1).concat(i).concat(' ').concat(btl).concat(phrase2).concat('\n');
        else {
            string = string.concat('No more ').concat(btl).concat(phrase1).concat('no more ').concat(btl).concat(phrase1).concat('\n');
            song = song.concat(string);
            string = '';
            string = string.concat('Go to the store and buy some more, ').concat('99 ').concat(btl).concat(' of beer on the wall.');
        }
        song = song.concat(string);;
        
    }
    console.log(song);
    //res.push(song);
    res[0] = song;
    console.log(res);
    return res;*/

}


/**
 * Returns the Fibonacci sequence:
 *   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
 *
 * See more at: https://en.wikipedia.org/wiki/Fibonacci_number
 *
 * @return {Iterable.<number>}
 *
 */
function* getFibonacciSequence() {
    throw new Error('Not implemented');
}


/**
 * Traverses a tree using the depth-first strategy
 * See details: https://en.wikipedia.org/wiki/Depth-first_search
 *
 * Each node have child nodes in node.children array.
 * The leaf nodes do not have 'children' property.
 *
 * @params {object} root the tree root
 * @return {Iterable.<object>} the sequence of all tree nodes in depth-first order
 * @example
 *
 *   var node1 = { n:1 }, node2 = { n:2 }, node3 = { n:3 }, node4 = { n:4 },
 *       node5 = { n:5 }, node6 = { n:6 }, node7 = { n:7 }, node8 = { n:8 };
 *   node1.children = [ node2, node6, node7 ];
 *   node2.children = [ node3, node4 ];
 *   node4.children = [ node5 ];
 *   node7.children = [ node8 ];
 *
 *     source tree (root = 1):
 *            1
 *          / | \
 *         2  6  7
 *        / \     \            =>    { 1, 2, 3, 4, 5, 6, 7, 8 }
 *       3   4     8
 *           |
 *           5
 *
 *  depthTraversalTree(node1) => node1, node2, node3, node4, node5, node6, node7, node8
 *
 */
function* depthTraversalTree(root) {
    throw new Error('Not implemented');
}


/**
 * Traverses a tree using the breadth-first strategy
 * See details: https://en.wikipedia.org/wiki/Breadth-first_search
 *
 * Each node have child nodes in node.children array.
 * The leaf nodes do not have 'children' property.
 *
 * @params {object} root the tree root
 * @return {Iterable.<object>} the sequence of all tree nodes in breadth-first order
 * @example
 *     source tree (root = 1):
 *
 *            1
 *          / | \
 *         2  3  4
 *        / \     \            =>    { 1, 2, 3, 4, 5, 6, 7, 8 }
 *       5   6     7
 *           |
 *           8
 *
 */
function* breadthTraversalTree(root) {
    throw new Error('Not implemented');
}


/**
 * Merges two yield-style sorted sequences into the one sorted sequence.
 * The result sequence consists of sorted items from source iterators.
 *
 * @params {Iterable.<number>} source1
 * @params {Iterable.<number>} source2
 * @return {Iterable.<number>} the merged sorted sequence
 *
 * @example
 *   [ 1, 3, 5, ... ], [2, 4, 6, ... ]  => [ 1, 2, 3, 4, 5, 6, ... ]
 *   [ 0 ], [ 2, 4, 6, ... ]  => [ 0, 2, 4, 6, ... ]
 *   [ 1, 3, 5, ... ], [ -1 ] => [ -1, 1, 3, 5, ...]
 */
function* mergeSortedSequences(source1, source2) {
    throw new Error('Not implemented');
}


module.exports = {
    get99BottlesOfBeer: get99BottlesOfBeer,
    getFibonacciSequence: getFibonacciSequence,
    depthTraversalTree: depthTraversalTree,
    breadthTraversalTree: breadthTraversalTree,
    mergeSortedSequences: mergeSortedSequences
};
