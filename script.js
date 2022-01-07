//gets user input from the terminal, logs a messge confirming entry, converts input to uppercase, and selects the second character of user's first name
var readline = require('readline-sync');

var name = readline.question("What is your first name?");

console.log("Hi " + name + ", nice to meet you. We're working on generating your three random fortunes");

const upperInput = name.toUpperCase();

const lastLetter = upperInput.charAt(name.length - 1);

console.log(lastLetter)

//object of fortunes

const fortunes = {

    A: ["Be careful who you trust. Salt and sugar look the same.", "Tough love only works when there's as much love as there is tough.", "Joy is what happens to us when we allow ourselves to recognize how good things really are."],

    B: ["Every new beginning comes from some other beginning's end.", "Little by little, one travels far.", "What good are wings,without the courage to fly."],

    C: ["She lives the poetry she cannot write.", "I can't go back to yesterday because I was a different person then", "Don't let yesterday take up too much of today."],

    D: ["I never dreamed about success. I worked for it.", "If you want the rainbow you gotta put up with the rain!", "One person alone is not a full person; we exist in relation to others."],

    E: ["All we have to decide is what to do with the time that is given to us.", "It's only after we've lost everything that we're free to do anything.", "A woman is like a tea bag; you never know how strong it is until it's in hot water."],

    F: ["Love all, trust a few, do wrong to none.", "One bad chapter doesn't mean your story is over.", "You are not what you've done. You are what you keep doing."],

    G: ["It is never too late to be what you might have been.", "Loving yourself isn't vanity. It's sanity.", "Do not let making a living prevent you from making a life."],

    H: ["Turn your wounds into wisdom.", "The road to success is always under construction.", "You must expect great things of yourself before you can do them."],

    I: ["Always do your best. What you plant now, you will harvest later.", "The most effective way to do it, is to do it.", "Not all those who wander are lost."],

    J: ["The worst enemy to creativity is self-doubt.", "If we wait until we're ready, we'll be waiting for the rest of our lives.", "The only limits for tomorrow are the doubts we have today."],

    K: ["All endings are also beginnings. We just don't know it at the time.", "Well behaved women seldom make history.", "You are your best thing."],

    L: ["There is always something left to love.", "It does not do to dwell on dreams and forget to live.", "I am not afraid of storms, for I am learning how to sail my ship."],

    M: ["Breathe, Darling, this is just a chapter, not your whole story.", "We don't stop going to school when we graduate.", "Graduates, we need you to save the world."],

    N: ["Graduation is the first step of the next chapter of your life.", "Graduation isn't the end of a tough journey. It is the beginning of a beautiful one.", "Graduation is not the end; it's the beginning."],

    O: ["Live as if you were to die tomorrow. Learn as if you were to live forever.", "No matter what people tell you, words and ideas can change the world.", "The best way to predict your future is to create it."],

    P: ["Don't cry because it's over. Smile because it happened.", "Stay hungry. Stay foolish.", "The road to success is always under construction."],

    Q: ["Get busy living or get busy dying.", "Try and fail, but never fail to try.", "A journey of a thousand miles begins with a single step."],

    R: ["Persistence can change failure into extraordinary achievement.", "It takes courage to grow up andbecome who you really are.", "It's better to be a failure at something you love than to be a success at something you hate."],

    S: ["If I must give any of you advice it would be say yes. Say yes, and create your own destiny.", "Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered.", "The future belongs to those who believe in the beauty of their dreams."],

    T: ["Kid, you'll move mountains.", "There are no regrets in life. Just lessons.", "There are far, far better things aheadthan any we leave behind."],

    U: ["Believe and act as if it were impossible to fail.", "If you can imagine it, you can achieve it; if you can dream it, you can become it.", "Things turn out best for people who make the best out of the way things turn out."],

    V: ["The only impossible journey is the one you never begin.", "The fireworks begin today. Each diploma is a lighted match. Each one of you is a fuse.", "Always aim high, work hard, and care deeply about what you believe in."],

    W: ["The beautiful thing about learning is that no one can take it away from you.", "Start where you are. Use what you have. Do what you can.", "Be bold, be courageous, be your best."],

    X: ["There's no way to be a perfect mother and a million ways to be a good one.", "Being a mother is learning about strengths you didn't know you had.", "When I became a mother, it was then I knew what was in my mom's heart."],

    Y: ["I gave you life, but really, you gave me mine.", "Just when you think you know love, something little comes along and reminds you just how big it is.", "Everything has changed, and yet, I'm more me than I've ever been."],

    Z: ["Wishes are granted in a mother's heart.", "It is without a doubt that no one adores their mom more than I adore you.", "Mom, you've been my rock. Thank you for showing me your steadfast strength."]
}

//checks user input and grabs fortunes from the fortune object based on user's second letter of their first name
switch(lastLetter) {
    case 'A':
        for (let i = 0; i < fortunes.A.length; i++){
                 console.log(`Fortune ${i + 1}: - ${fortunes.A[i]}`)
            }
    break;
    case 'B':
        for (let i = 0; i < fortunes.B.length; i++){
                 console.log(`Fortune ${i + 1}: - ${fortunes.B[i]}`)
            }
    break;
    case 'C':
        for (let i = 0; i < fortunes.C.length; i++){
                 console.log(`Fortune ${i + 1}: - ${fortunes.C[i]}`)
            }
    break;
    case 'D':
        for (let i = 0; i < fortunes.D.length; i++){
                 console.log(`Fortune ${i + 1}: - ${fortunes.D[i]}`)
            }
    break;
    case 'E':
        for (let i = 0; i < fortunes.E.length; i++){
                 console.log(`Fortune ${i + 1}: - ${fortunes.E[i]}`)
            }
    break;
    case 'F':
        for (let i = 0; i < fortunes.F.length; i++){
                 console.log(`Fortune ${i + 1}: - ${fortunes.F[i]}`)
            }
    break;
    case 'G':
        for (let i = 0; i < fortunes.G.length; i++){
                 console.log(`Fortune ${i + 1}: - ${fortunes.G[i]}`)
            }
    break;
    case 'H':
        for (let i = 0; i < fortunes.H.length; i++){
                 console.log(`Fortune ${i + 1}: - ${fortunes.H[i]}`)
            }
    break;
    case 'I':
        for (let i = 0; i < fortunes.I.length; i++){
                 console.log(`Fortune ${i + 1}: - ${fortunes.I[i]}`)
            }
    break;
    case 'J':
        for (let i = 0; i < fortunes.J.length; i++){
                 console.log(`Fortune ${i + 1}: - ${fortunes.J[i]}`)
            }
    break;
    case 'K':
        for (let i = 0; i < fortunes.K.length; i++){
                 console.log(`Fortune ${i + 1}: - ${fortunes.K[i]}`)
            }
    break;
    case 'L':
        for (let i = 0; i < fortunes.L.length; i++){
                 console.log(`Fortune ${i + 1}: - ${fortunes.L[i]}`)
            }
    break;
    case 'M':
        for (let i = 0; i < fortunes.M.length; i++){
                 console.log(`Fortune ${i + 1}: - ${fortunes.M[i]}`)
            }
    break;
    case 'N':
        for (let i = 0; i < fortunes.N.length; i++){
                 console.log(`Fortune ${i + 1}: - ${fortunes.N[i]}`)
            }
    break;
    case 'O':
        for (let i = 0; i < fortunes.O.length; i++){
                 console.log(`Fortune ${i + 1}: - ${fortunes.O[i]}`)
            }
    break;
    case 'P':
        for (let i = 0; i < fortunes.P.length; i++){
                 console.log(`Fortune ${i + 1}: - ${fortunes.P[i]}`)
            }
    break;
    case 'Q':
        for (let i = 0; i < fortunes.Q.length; i++){
                 console.log(`Fortune ${i + 1}: - ${fortunes.Q[i]}`)
            }
    break;
    case 'R':
        for (let i = 0; i < fortunes.R.length; i++){
                 console.log(`Fortune ${i + 1}: - ${fortunes.R[i]}`)
            }
    break;
    case 'S':
        for (let i = 0; i < fortunes.S.length; i++){
                 console.log(`Fortune ${i + 1}: - ${fortunes.S[i]}`)
            }
    break;
    case 'T':
        for (let i = 0; i < fortunes.T.length; i++){
                 console.log(`Fortune ${i + 1}: - ${fortunes.T[i]}`)
            }
    break;
    case 'U':
        for (let i = 0; i < fortunes.U.length; i++){
                 console.log(`Fortune ${i + 1}: - ${fortunes.U[i]}`)
            }
    break;
    case 'V':
        for (let i = 0; i < fortunes.V.length; i++){
                 console.log(`Fortune ${i + 1}: - ${fortunes.V[i]}`)
            }
    break;
    case 'W':
        for (let i = 0; i < fortunes.W.length; i++){
                 console.log(`Fortune ${i + 1}: - ${fortunes.W[i]}`)
            }
    break;
    case 'X':
        for (let i = 0; i < fortunes.X.length; i++){
                 console.log(`Fortune ${i + 1}: - ${fortunes.X[i]}`)
            }
    break;
    case 'Y':
        for (let i = 0; i < fortunes.Y.length; i++){
                 console.log(`Fortune ${i + 1}: - ${fortunes.Y[i]}`)
            }
    break;
    case 'Z':
        for (let i = 0; i < fortunes.Z.length; i++){
                 console.log(`Fortune ${i + 1}: - ${fortunes.Z[i]}`)
            }
    break;
}