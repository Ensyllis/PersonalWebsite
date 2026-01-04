---
title: "Jane Street December Solution"
date: "2025-01-03"
description: "My Solution to Jane Street December"
image: "/Blog/JaneStreet.png"
---

Problem:
### Robot Javelin

It’s coming to the end of the year, which can only mean one thing: time for this year’s **Robot Javelin** finals! Whoa wait, you’ve never heard of Robot Javelin? Well then! Allow me to explain the rules:

- It’s head-to-head. Each of two robots makes their first throw, whose distance is a real number drawn uniformly from [0, 1].
- Then, without knowledge of their competitor’s result, each robot decides whether to keep their current distance or erase it and go for a second throw, whose distance they must keep (it is also drawn uniformly from [0, 1]).
- The robot with the larger final distance wins.

This year’s finals pits your robot, Java-lin, against the challenger, Spears Robot. Now, robots have been competing honorably for years and have settled into the Nash equilibrium for this game. However, you have _just learned_ that Spears Robot has found and exploited a leak in the protocol of the game. They can receive a single bit of information telling them whether their opponent’s first throw (distance) was above or below some threshold _d_ of their choosing before deciding whether to go for a second throw. Spears has presumably chosen _d_ to maximize their chance of winning — no wonder they made it to the finals!

Spears Robot isn’t aware that you’ve learned this fact; they are assuming Java-lin is using the Nash equilibrium. If you _were_ to adjust Java-lin’s strategy to maximize its odds of winning given this, what would be Java-lin’s updated probability of winning? Please give the answer in exact terms, or as a decimal rounded to 10 places.

---

First Problem. We want to know what is the nash equilibrium for this game. We can define some threshold which says, if our score is below this threshold then we would want to re-throw because the probability that the next throw is higher is more likely. On the other hand if it is above or reaches this threshold then keep it because the probability the next throw will be less is higher. 

Notice that by solving this:
$$
\int_0^1 F(y) dy = \int_0^t tydy + \int_t^1[(1+t)y-t]dy = \frac{t^3}{2} + \frac{(1+t)(1-t^2)}{2} - t(1-t) = \frac{1-t+t^2}{2}
$$
Equilibrium condition, at x = t, we need $F(t) = \int_0^1 F(y)dy$
$$
t^2= \frac{1-t+t^2}{2}
$$
$$
2t^2=1-t+t^2
$$
$$
t^2+t-1=0
$$
$$
t^* = \frac{-1+\sqrt5}{2} \approx0.618
$$
we can determine that ~0.618 is the threshold for the Nash Equilibrium. 

---

Now onto solving for Spearbot. Since Spearbot knows this information, it can us the single bit of information to determine whether or not the opponent will rethrow their spear or not, then make a choice based on that. We know that it would not be the other thresholds because D must be chosen before the game starts, secondly, we know that for any other point, then  we will get worse information since there will invariably be mixture of Java-lin's decisions. 

- Ie: For any point you choose outside of $\frac{-1+\sqrt5}{2}$ below or above, will introduce decision mixture. Ie: d = 0.35 then if d > 0.35 SpearBot does not know if Java-lin will keep or rethrow the Javelin. 

We can know this by going through case by case. 
- $J_1 < t^*$, then Java-lin will rethrow (100% certain) therefore Java-lin's final throw is $U[0,1]$
- $J_1 > t^*$, then Java-lin will keep (100% certain) therefore Java-lin's final throw is $U[t^*,1]$ 

Using case-by-case we can determine the winrate for both of these. 

Case 1: Signal says $J_1 < t^*$:
- Java-lin's final ~$U[0,1]$ with an $E[X] = 0.50$
- Spears: Keep if $S_1 > 0.5$ or else, Rethrow]
- Expected win rate: $\int_0^{0.5} 0.5 ds + \int_{0.5}^1 s ds = 0.25 + 0.375 = 0.625$

Case 2: Signal says $J_1 > t^*$ probability $1-t^*$ 
- Java-lin's final throw ~$U[t^*,1]$
- If Spears rethrows: $P(win) = \frac{1-t^*}{2}\approx 0.191$ 
	- This is determined by $\frac{1-0.618}{2} = \frac{382}{2} = 0.191$ with 0.618 being approximate to $\frac{-1+\sqrt5}{2}$
	- Since we wish for it to be in the 10 decimal winrate change down the line, accuracy matters. We can simplify it to 
		- $\frac{3-\sqrt5}{4}$ 
- Spear keeps if $\frac{S_1-t^*}{1-t^*} > \frac{1-t^*}{2}$
	- Simplifying it further:
	- $S_1 > t^* + \frac{(1-t)^2}{2}$
	- Adding back in the right side of t being $\frac{-1+\sqrt5}{2}$ we get approximately 0.691. Again precision matters so the simplified version of
$$
\frac{-1+\sqrt{5}}{2}\ +\ \left(\frac{\left(1-\frac{-1+\sqrt{5}}{2}\right)^{2}}{2}\right) = \frac{5-\sqrt5}{4}
$$
- To get the expected winrate we would need to integrate the win probability over two regions:
	- Spear Rethrows $(S_1 < T_2)$ where Spears wins with probability $\frac{1-t^*}{2}$
	- Spear Keeps $(S_1> T_2)$  where Spears wins with probability $\frac{S_1-t^*}{1-t^*}$
_$$P(\text{Win}|High) = \underbrace{T_2 \cdot \left(\frac{1-t^*}{2}\right)}_{\text{Rethrow Region}} + \underbrace{\int_{T_2}^1 \frac{s - t^*}{1-t^*} ds}_{\text{Keep Region}}$$
$$
P(\text{Win}| \text{High}) = \frac{7-2\sqrt5}{8} \approx 0.316
$$


The overall Probability that Spears wins given this new bit of data is
$$
P(\text{Spears Wins}) = t^* \cdot 0.625 + (1-t^*) \cdot (1- t^*) \cdot \frac{7-2\sqrt5}{8}
$$
Adding t back in we get
$$
P(\text{Spears Wins}) = \frac{\sqrt5 -1}{2}\cdot \frac{5}{8} + \frac{3-\sqrt5}{2}\cdot \frac{7-2\sqrt5}{8}
$$
$$
= \frac{13-4\sqrt5}{8} \approx 0.50696\dots \approx 0.507
$$

---

Win Probability of Java-Lin:
$$
1- \frac{13-4\sqrt5}{8}\approx 0.4930\dots
$$
Simplifying the fraction we would get
$$
\frac{4\sqrt5 - 5}{8}
$$

Consider SpearBot's lower threshold strategy. If $J_1 < 0.618$ then it must consider whether or not to keep or rethrow. It knows that the opponent will guarantee rethrow, therefore it must consider whether it's current throw ill exceed the expected score of $E[X] = 0.50$ from a $U[0,1]$ from the opponent's rethrow. 

Therefore his current best strategy is:
- $J_1 < 0.618$
	- If Spear's $S_1 >= 0.50$ Keep
	- If Spear's $S_1 < 0.50$ Rethrow

We calculated that this strategy has a win-rate of 0.625. Therefore our winrate of the lower threshold is 
$$
1 - 0.625 = 0.375
$$

If we copied his strategy, what is our probability of beating spears?
Consider the case where 
$$
(0.5 < J_1 < 0.618)
$$
Spear's first throw is $U[0,1]$. Notice how his strategy can be simplified o, "If my throw is > 0.50 I keep, else I rethrow" which means Spears has a 50% probability on keeping since his first throw is determined by $U[0,1]$. WLOG he also has a 50% probability to rethrow.

If we consider keeping our first throw, the probability we win depends on the following cases:
- Spears Keeps (50%) of the time: He Keeps if $S_1 > 0.50$
	- We would need a spear throw that is larger than Spear's throw. 
	- $S_1 > J_1$ means he wins
	- Since $J_1$ > 0.50 the range of winning throws is $(J_1,1)$
	- Probability = $1- J_1$
- Spears Rethrows (50% chance): He Rethrows if $S_1 < 0.50$
	- His second throw is $S_2 \in U[0,1]$
	- For him to beat us, $S_2 > J_1$
	- Probability = $0.5 \cdot (1-J_1)$

Therefore if we keep our values between $(0.5 < J_1 < 0.618)$ then we can know the probability that we win is
$$
P(\text{Spears beats }J_1| \text{Keep }J_1) = \underbrace{(1-J_1)}_{S_1 > 0.50} + \underbrace{0.5(1-J_1)}_{S_2 < 0.50} = 1.5(1-J_1)
$$
$$
P(\text{Win | Keep }J_1) = 1 - 1.5(1-J_1)
$$
We want to know what is our updated threshold. By the laws of symmetry we want to know the exact point where keeping and rethrowing are identical in probabilities:
$$
P(\text{Win | Keep }J_1) = P(\text{Win | Rethrow})
$$
$$
1- 1.5(1-J_1) = 0.375
$$
$$
1.5(1-J_1) = 0.625
$$
$$
1-J_1 = \frac{0.625}{1.5}
$$
$$
1-\frac{0.625}{1.5} = J_1
$$
$$
\frac{7}{12} = J_1 \approx 0.58333\dots
$$

Therefore our final strategy is
- Range: $[0,0.583)$ Rethrow. Hand too weak
- Range: $[0.518, 0.618]$ The Bluff zone. Keep your hand
- Range: $(0.618, 1]$: Keep.

Very elegant! 

Empirical results also confirm our results:
```
Nash Equilibrium (t*): 0.6180339887
Win Rate at Nash:      0.4930339889
------------------------------
Optimal Threshold:     0.5833333333
Max Possible Win Rate: 0.4939370905
```

---

The problem initially asked 
```
what would be Java-lin’s updated probability of winning? Please give the answer in exact terms, or as a decimal rounded to 10 places.
```
So we need to calculate Java-Lin's probability of winning with this new Threshold!

We would need to add in the probability of winning for every single range. 
- Range: $[0,0.583)$ Rethrow. Hand too weak
	- Recall:
		- We know the win-rate for rethrows against 0.5 threshold is 0.375 
		- $$
			\frac{7}{12} \times \frac{3}{8} = \frac{7}{32}
			$$
- Range: $[0.518, 0.618]$ The Bluff zone. Keep your hand
	- Recall:
		- We already determined that the probability of keeping within this zone is determined by the equation $(1.5x - 0.5)$ We would need to calculate the integral 
$$
\int_{7/12}^{t^*} (1.5x-0.5)dx
$$

$$
[0.75x^2-0.5x]_{7/12}^{t^*}
$$

Replacing $t^*$ with $\frac{\sqrt5 -1}{2}$ we get

$$
\frac{271-120\sqrt5}{192}
$$
	But Desmos also can confirm this
![Text](/Blog/JSDecemberPic1.png)
- Range: $(0.618, 1]$: Keep.
	- Recall: We already calculated Spear's probability of winning here as
		$$
		\frac{7-2\sqrt5}{8}
		 $$
	- Therefore to get Java-Lin's probability it is merely
		$$
			1- \frac{7-2\sqrt5}{8} = \frac{1+2\sqrt5}{8}
		 $$
	- Then multiply it by the width which is $(1-t^*)$
$$
\left(\frac{3-\sqrt5}{2}\right) \cdot \left( \frac{1+2\sqrt5}{8}\right)
$$



adding up all these in desmos gives us:
$$
\frac{7}{32}+\frac{\left(271-120\sqrt{5}\right)}{192}+\left(\frac{3-\sqrt{5}}{2}\right)\cdot\left(\frac{1+2\sqrt{5}}{8}\right)
$$
![Text](/Blog/JSDecemberPic2.png)
0.493937090365

Since Jane Street wants the either exact terms or rounded up to the 10 decimal places. 

Final Answer: 0.4939370904 or $\frac{229-60\sqrt5}{192}$ 