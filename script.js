// Array of philosophy quotes
const quotes = [
  "The secret of man’s being is not only to live but to have something to live for. – Fyodor Dostoevsky",
  "To live without hope is to cease to live. – Fyodor Dostoevsky",
  "Man is what he believes. – Fyodor Dostoevsky",
  "The greatest happiness is to know the source of unhappiness. – Fyodor Dostoevsky",
  "A man takes pride in his life when he knows the world is a place of suffering. – Fyodor Dostoevsky",
  "What is hell? I maintain that it is the suffering of being unable to love. – Fyodor Dostoevsky",
  "Pain and suffering are always inevitable for a large intelligence and a deep heart. – Fyodor Dostoevsky",
  "The more I love humanity in general, the less I love man in particular. – Fyodor Dostoevsky",
  "It is not the world that is deceived, but the man who deceives himself. – Fyodor Dostoevsky",
  "If you want to be a saint, take up your cross and follow Christ, but if you want to be a great man, then do what you please. – Fyodor Dostoevsky",
  "The man who has a conscience suffers whilst acknowledging his sin. That is his punishment— as well as prison. – Fyodor Dostoevsky",
  "Everything is a mystery, and there is no explanation for anything. – Fyodor Dostoevsky",
  "I am a sick man… I am a wicked man. An unattractive man. I think there is something wrong with my liver. – Fyodor Dostoevsky",
  "What is required of a man is not to fail, but to be at peace with his failure. – Fyodor Dostoevsky",
  "A man takes pride in his life when he knows the world is a place of suffering. – Fyodor Dostoevsky",
  "We are all attracted by the impossible, but the impossible is not what it seems. – Fyodor Dostoevsky",
  "I am a man of moods, and I often become passionate about what I am doing. – Fyodor Dostoevsky",
  "There is no doubt that a man is capable of great good, but he is also capable of terrible evil. – Fyodor Dostoevsky",
  "The soul is healed by being with children. – Fyodor Dostoevsky",
  "If you want to overcome the world, you must first overcome yourself. – Fyodor Dostoevsky",
  "Man’s main task in life is to give birth to himself, to become what he potentially is. – Fyodor Dostoevsky",
  "The man who has a conscience suffers whilst acknowledging his sin. That is his punishment— as well as prison. – Fyodor Dostoevsky",
  "A man who lies to himself, and believes his own lies, becomes unable to recognize truth, either in himself or in anyone else. – Fyodor Dostoevsky",
  "It is better to be with God and suffer than to be without Him and not suffer. – Fyodor Dostoevsky",
  "I think that the aim of human existence is not to live in harmony with others, but to attain peace with oneself. – Fyodor Dostoevsky",
  "There is only one thing that I dread: not to be worthy of my suffering. – Fyodor Dostoevsky",
  "The man who has a conscience suffers whilst acknowledging his sin. That is his punishment— as well as prison. – Fyodor Dostoevsky",
  "It is not the power of the body that counts, but the strength of the mind. – Fyodor Dostoevsky",
  "It’s not the world that’s insane, it’s us. – Fyodor Dostoevsky",
  "We are all capable of great good and great evil. – Fyodor Dostoevsky",
  "Take a chance and you may win! – Fyodor Dostoevsky",
  "Do not forget that your sufferings, as you call them, are the only things in life that can never be taken from you. – Fyodor Dostoevsky",
  "Man is what he believes. – Fyodor Dostoevsky",
  "Man is a mystery. It needs to be unraveled, and if you spend your whole life unraveling it, don't say that you've wasted your time. – Fyodor Dostoevsky",
  "It is better to be with God and suffer than to be without Him and not suffer. – Fyodor Dostoevsky",
  "The soul is healed by being with children. – Fyodor Dostoevsky",
  "The more I love humanity in general, the less I love man in particular. – Fyodor Dostoevsky",
  "Love is a great and terrible thing, a thing that can destroy, but also a thing that can heal. – Fyodor Dostoevsky",
  "To love is to suffer and to be loved is to suffer. – Fyodor Dostoevsky",
  "Every man is guilty of all the good he did not do. – Fyodor Dostoevsky",
  "There is no need to be afraid of life. It is full of love and beauty. – Fyodor Dostoevsky",
  "The more I love humanity in general, the less I love man in particular. – Fyodor Dostoevsky",
  "The soul is healed by being with children. – Fyodor Dostoevsky",
  "The best way to keep a prisoner from escaping is to make sure he never knows he’s in prison. – Fyodor Dostoevsky",
  "A man who has a conscience suffers whilst acknowledging his sin. That is his punishment— as well as prison. – Fyodor Dostoevsky",
  "What is hell? I maintain that it is the suffering of being unable to love. – Fyodor Dostoevsky",
  "The more I love humanity in general, the less I love man in particular. – Fyodor Dostoevsky",
  "I am a sick man. … I am a wicked man. – Fyodor Dostoevsky",
  "A man takes pride in his life when he knows the world is a place of suffering. – Fyodor Dostoevsky",
  "What is hell? I maintain that it is the suffering of being unable to love. – Fyodor Dostoevsky",
  "The more I love humanity in general, the less I love man in particular. – Fyodor Dostoevsky",
  "I am a sick man. … I am a wicked man. – Fyodor Dostoevsky",
  "I am a sick man… I am a wicked man. An unattractive man. I think there is something wrong with my liver. – Fyodor Dostoevsky",
  "The degree of civilization in a society can be judged by entering its prisons. – Fyodor Dostoevsky",
  "Much unhappiness has come into the world because of bewilderment and things left unsaid. – Fyodor Dostoevsky",
  "Above all, don't lie to yourself. – Fyodor Dostoevsky",
  "The mystery of human existence lies not in just staying alive, but in finding something to live for. – Fyodor Dostoevsky",
  "To love someone means to see them as God intended them. – Fyodor Dostoevsky",
  "The greatest happiness is to know the source of unhappiness. – Fyodor Dostoevsky",
  "Man grows used to everything, the scoundrel! – Fyodor Dostoevsky",
  "The second half of a man’s life is made up of nothing but the habits he has acquired during the first half. – Fyodor Dostoevsky",
  "A beast can never be as cruel as a human being, so artistically, so picturesquely cruel. – Fyodor Dostoevsky",
  "Beauty will save the world. – Fyodor Dostoevsky",
  "Lying to ourselves is more deeply ingrained than lying to others. – Fyodor Dostoevsky",
  "It takes something more than intelligence to act intelligently. – Fyodor Dostoevsky",
  "If you want to overcome the whole world, overcome yourself. – Fyodor Dostoevsky",
  "Man is sometimes extraordinarily, passionately, in love with suffering. – Fyodor Dostoevsky",
  "To be too conscious is an illness. A real thorough-going illness. – Fyodor Dostoevsky",
  "Nothing in this world is harder than speaking the truth, nothing easier than flattery. – Fyodor Dostoevsky",
  "The soul is healed by being with children. – Fyodor Dostoevsky",
  "Happiness does not lie in happiness, but in the achievement of it. – Fyodor Dostoevsky",
  "There is immeasurably more left inside than what comes out in words. – Fyodor Dostoevsky",
  "The man who has a conscience suffers whilst acknowledging his sin. That is his punishment. – Fyodor Dostoevsky",
  "Suffering is the sole origin of consciousness. – Fyodor Dostoevsky",
  "A true gentleman is one who is never unintentionally rude. – Fyodor Dostoevsky",
  "There are things which a man is afraid to tell even to himself, and every decent man has a number of such things stored away in his mind. – Fyodor Dostoevsky",
  "The more stupid one is, the closer one is to reality. The more stupid one is, the clearer one is. Stupidity is brief and artless, while intelligence squirms and hides itself. – Fyodor Dostoevsky",
  "Taking a new step, uttering a new word, is what people fear most. – Fyodor Dostoevsky",
  "Man is a creature that can get used to anything, and I think that is the best definition of him. – Fyodor Dostoevsky",
  "What a terrible thing it is to wound someone you really care for and to do it so unconsciously. – Fyodor Dostoevsky",
  "Man only likes to count his troubles; he doesn’t calculate his happiness. – Fyodor Dostoevsky",
  "A man who lies to himself, and believes his own lies, becomes unable to recognize truth, either in himself or in anyone else. – Fyodor Dostoevsky",
  "What does reason know? Reason only knows what it has succeeded in learning. – Fyodor Dostoevsky",
  "The more I love humanity in general, the less I love man in particular. – Fyodor Dostoevsky",
  "Hell is the inability to love. – Fyodor Dostoevsky",
  "Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him. – Fyodor Dostoevsky",
  "We sometimes encounter people, even perfect strangers, who begin to interest us at first sight. – Fyodor Dostoevsky",
  "A man is sometimes afraid of his own self. – Fyodor Dostoevsky",
  "Man cannot live without worshipping something. – Fyodor Dostoevsky",
  "The world will be saved by beauty. – Fyodor Dostoevsky",
  "To love someone means to see them as God intended them. – Fyodor Dostoevsky",
  "To live without hope is to cease to live. – Fyodor Dostoevsky",
  "Man is unhappy because he doesn’t know he’s happy. – Fyodor Dostoevsky",
  "The more stupid one is, the closer one is to reality. – Fyodor Dostoevsky",
  "The best way to keep a prisoner from escaping is to make sure he never knows he’s in prison. – Fyodor Dostoevsky",
  "You can be sincere and still be stupid. – Fyodor Dostoevsky",
  "If you want to be respected by others, the great thing is to respect yourself. – Fyodor Dostoevsky",
  "What is hell? I maintain that it is the suffering of being unable to love. – Fyodor Dostoevsky",
  "The man who has a conscience suffers whilst acknowledging his sin. That is his punishment— as well as prison. – Fyodor Dostoevsky",
  "Man is what he believes. – Fyodor Dostoevsky",
  "The soul is healed by being with children. – Fyodor Dostoevsky",
  "Suffering is part of the divine plan; it leads to redemption. – Fyodor Dostoevsky",
  "Power is given only to those who dare to lower themselves and pick it up. – Fyodor Dostoevsky",
  "Without a firm idea of what he lives for, man cannot accept life and will sooner destroy himself. – Fyodor Dostoevsky",
  "It is better to be unhappy and know the worst than to be happy in a fool’s paradise. – Fyodor Dostoevsky",
  "Men do not accept their prophets and slay them, but they love their martyrs and worship those whom they have tortured to death. – Fyodor Dostoevsky",
  "To love is to suffer and there can be no love otherwise. – Fyodor Dostoevsky",
  "One must love life before loving its meaning. – Fyodor Dostoevsky",
  "The darker the night, the brighter the stars. The deeper the grief, the closer is God. – Fyodor Dostoevsky",
  "You can love a person dear to you with a human love, but an enemy can only be loved with divine love. – Fyodor Dostoevsky",
  "What is hell? I maintain that it is the suffering of being unable to love. – Fyodor Dostoevsky",
  "To be conscious is to suffer. – Fyodor Dostoevsky",
  "A man can forgive a child for being afraid of the dark, but the real tragedy is when men are afraid of the light. – Fyodor Dostoevsky",
  "There is no subject so old that something new cannot be said about it. – Fyodor Dostoevsky",
  "To achieve perfection, man must pass through the furnace of suffering. – Fyodor Dostoevsky",
  "Man is sometimes extraordinarily, passionately, in love with suffering. – Fyodor Dostoevsky",
  "The soul that does not work is a dead soul. – Fyodor Dostoevsky",
  "It is man's greatest misfortune to lack self-restraint. – Fyodor Dostoevsky",
  "Love a man even in his sin, for that is the semblance of divine love. – Fyodor Dostoevsky",
  "Suffering is the sole origin of consciousness. – Fyodor Dostoevsky",
  "It is not the strength, but the duration, of great sentiments that makes great men. – Fyodor Dostoevsky",
  "Love all of God’s creation, the whole of it and every grain of sand. Love every leaf, every ray of God’s light. – Fyodor Dostoevsky",
  "Nothing has ever been more insupportable for a man than freedom. – Fyodor Dostoevsky",
  "The best way to make a man good is to show him what is bad. – Fyodor Dostoevsky",
  "If God does not exist, everything is permitted. – Fyodor Dostoevsky",
  "Man is a creature that can get accustomed to anything. – Fyodor Dostoevsky",
  "Man has it all in his hands, and it all slips through his fingers from sheer cowardice. – Fyodor Dostoevsky",
  "A society should be judged not by how it treats its outstanding citizens, but by how it treats its criminals. – Fyodor Dostoevsky",
  "To go wrong in one’s own way is better than to go right in someone else’s. – Fyodor Dostoevsky",
  "A man who is content with his past life is worse than a coward. – Fyodor Dostoevsky",
  "Happiness lies in oneself, not in external things. – Fyodor Dostoevsky",
  "Man is unhappy because he doesn’t realize he is happy. – Fyodor Dostoevsky",
  "There is no subject so old that something new cannot be said about it. – Fyodor Dostoevsky",
  "Sorrow is the root of all virtue. – Fyodor Dostoevsky",
  "We have ceased to see the heavens. – Fyodor Dostoevsky",
  "A fool with a heart and no sense is just as unhappy as a fool with sense and no heart. – Fyodor Dostoevsky",
  "Man’s freedom is his ability to choose his own suffering. – Fyodor Dostoevsky",
  "Nothing is easier than to denounce the evildoer; nothing is more difficult than to understand him. – Fyodor Dostoevsky",
  "If you wish to glimpse inside a human soul, do not probe for its secrets. Rather, observe how it treats others. – Fyodor Dostoevsky",
  "Man only likes to count his troubles; he doesn't calculate his happiness. – Fyodor Dostoevsky",
  "Man is sometimes incredibly, passionately in love with suffering. – Fyodor Dostoevsky",
  "Life is in ourselves and not in the external. – Fyodor Dostoevsky",
  "Man is made for happiness, and anyone who is completely happy has a right to say to himself, ‘I am doing God’s will on earth.’ – Fyodor Dostoevsky",
  "Happiness is a mirage that we pursue only to find it in memory. – Fyodor Dostoevsky",
  "The greatest thing a man can experience is the unexpected. – Fyodor Dostoevsky",
  "The more stupid one is, the closer one is to reality. – Fyodor Dostoevsky",
  "Suffering leads to the enlightenment of the soul. – Fyodor Dostoevsky",
  "Every man has reminiscences which he would not tell to everyone but only to his friends. – Fyodor Dostoevsky",
  "Man must learn to look upon himself with the same seriousness as he does others. – Fyodor Dostoevsky",
  "There is only one thing that I dread: not to be worthy of my suffering. – Fyodor Dostoevsky",
  "Man is tormented not by suffering itself but by the meaninglessness of suffering. – Fyodor Dostoevsky",
  "If one has no vanity left, one becomes a great man. – Fyodor Dostoevsky",
  "A hundred suspicions don’t make a proof. – Fyodor Dostoevsky",
  "Above all, don't lie to yourself. – Fyodor Dostoevsky",
  "Man is unhappy because he doesn’t know he’s happy; that’s all. – Fyodor Dostoevsky",
  "To love someone means to see them as God intended them to be. – Fyodor Dostoevsky",
  "Nothing is easier than to denounce the evildoer; nothing is more difficult than to understand him. – Fyodor Dostoevsky",
  "Pain and suffering are always inevitable for a large intelligence and a deep heart. – Fyodor Dostoevsky",
  "Hell is the suffering of being unable to love. – Fyodor Dostoevsky",
  "Man grows used to everything, the scoundrel! – Fyodor Dostoevsky",
  "Lying to ourselves is more deeply ingrained than lying to others. – Fyodor Dostoevsky",
  "The mystery of human existence lies not in just staying alive, but in finding something to live for. – Fyodor Dostoevsky",
  "Much unhappiness has come into the world because of bewilderment and things left unsaid. – Fyodor Dostoevsky",
  "The soul is healed by being with children. – Fyodor Dostoevsky",
  "There is immeasurably more left inside than what comes out in words. – Fyodor Dostoevsky",
  "To go wrong in one’s own way is better than to go right in someone else’s. – Fyodor Dostoevsky",
  "Nothing in this world is harder than speaking the truth, nothing easier than flattery. – Fyodor Dostoevsky",
  "Man has it all in his hands, and it all slips through his fingers from sheer cowardice. – Fyodor Dostoevsky",
  "Man is what he believes. – Fyodor Dostoevsky",
  "Above all, don't lie to yourself. – Fyodor Dostoevsky",
  "Man is tormented not by suffering itself, but by the meaninglessness of suffering. – Fyodor Dostoevsky",
  "To be too conscious is an illness. – Fyodor Dostoevsky",
  "The darker the night, the brighter the stars. The deeper the grief, the closer is God. – Fyodor Dostoevsky",
  "Suffering is part of the divine plan; it leads to redemption. – Fyodor Dostoevsky",
  "Without a firm idea of what he lives for, man cannot accept life and will sooner destroy himself. – Fyodor Dostoevsky",
  "It is man's greatest misfortune to lack self-restraint. – Fyodor Dostoevsky",
  "Love all of God’s creation, the whole of it and every grain of sand. Love every leaf, every ray of God’s light. – Fyodor Dostoevsky",
  "Man cannot live without worshipping something. – Fyodor Dostoevsky",
  "Taking a new step, uttering a new word, is what people fear most. – Fyodor Dostoevsky",
  "The degree of civilization in a society can be judged by entering its prisons. – Fyodor Dostoevsky",
  "Man is sometimes extraordinarily, passionately, in love with suffering. – Fyodor Dostoevsky",
  "If God does not exist, everything is permitted. – Fyodor Dostoevsky",
  "What a terrible thing it is to wound someone you really care for and to do it so unconsciously. – Fyodor Dostoevsky",
  "Man has it all in his hands, and it all slips through his fingers from sheer cowardice. – Fyodor Dostoevsky",
  "You can be sincere and still be stupid. – Fyodor Dostoevsky",
  "The more stupid one is, the closer one is to reality. – Fyodor Dostoevsky",
  "The world will be saved by beauty. – Fyodor Dostoevsky",
  "Hell is the inability to love. – Fyodor Dostoevsky",
  "Man is sometimes incredibly, passionately in love with suffering. – Fyodor Dostoevsky",
  "Nothing in this world is harder than speaking the truth, nothing easier than flattery. – Fyodor Dostoevsky",
  "The more I love humanity in general, the less I love man in particular. – Fyodor Dostoevsky",
  "Man only likes to count his troubles; he doesn’t calculate his happiness. – Fyodor Dostoevsky",
  "There is no subject so old that something new cannot be said about it. – Fyodor Dostoevsky",
  "Happiness does not lie in happiness, but in the achievement of it. – Fyodor Dostoevsky",
  "We sometimes encounter people, even perfect strangers, who begin to interest us at first sight. – Fyodor Dostoevsky",
  "Suffering leads to the enlightenment of the soul. – Fyodor Dostoevsky",
  "What does reason know? Reason only knows what it has succeeded in learning. – Fyodor Dostoevsky",
  "The soul that does not work is a dead soul. – Fyodor Dostoevsky",
  "Happiness lies in oneself, not in external things. – Fyodor Dostoevsky",
  "I am a sick man... I am a spiteful man. – Fyodor Dostoevsky",
  "To love is to suffer, and there can be no love otherwise. – Fyodor Dostoevsky",
  "Man only likes to count his troubles; he doesn't calculate his happiness. – Fyodor Dostoevsky",
  "Suffering is the sole origin of consciousness. – Fyodor Dostoevsky",
  "I swear to you gentlemen, that to be overly conscious is a sickness, a real, thorough sickness. – Fyodor Dostoevsky",
  "There is something at the bottom of every new human thought, every thought of genius, or even every earnest thought that springs up in any brain, which can never be communicated to others. – Fyodor Dostoevsky",
  "Reason is only reason, and it satisfies only the rational side of man's nature. – Fyodor Dostoevsky",
  "The whole work of man really seems to consist in nothing but proving to himself every minute that he is a man and not a piano key! – Fyodor Dostoevsky",
  "I say let the world go to hell, but I should always have my tea. – Fyodor Dostoevsky",
  "Man is a creature that can get accustomed to anything, and I think that is the best definition of him. – Fyodor Dostoevsky",
  "Man is sometimes extraordinarily, passionately, in love with suffering. – Fyodor Dostoevsky",
  "If it were not for suffering, man would not know joy. – Fyodor Dostoevsky",
  "Why do we always talk nonsense? Why, of course, because we are so pleased with it! – Fyodor Dostoevsky",
  "Taking a new step, uttering a new word, is what people fear most. – Fyodor Dostoevsky",
  "Man is a vile creature and does not deserve pity. – Fyodor Dostoevsky",
  "A man wants to create so much that sometimes he will even create destruction. – Fyodor Dostoevsky",
  "Man is fond of reckoning his troubles, but he does not count his joys. – Fyodor Dostoevsky",
  "Man does not act on reason alone; there is also free will. – Fyodor Dostoevsky",
  "What can one really expect from man, the only creature who is capable of getting used to anything? – Fyodor Dostoevsky",
  "The most advantageous advantage is that which is advantageous to my own will. – Fyodor Dostoevsky",
  "You see, gentlemen, reason is an excellent thing, there’s no disputing that, but reason is nothing but reason, and it only satisfies man’s rational requirements. – Fyodor Dostoevsky",
  "I was perfectly well aware that I could never become a hero, and yet I have a thirst for heroism. – Fyodor Dostoevsky",
  "Man has it all in his hands, and it all slips through his fingers from sheer cowardice. – Fyodor Dostoevsky",
  "What a man needs is only an independent volition, whatever that independence may cost and wherever it may lead. – Fyodor Dostoevsky",
  "I do not agree that suffering is a sickness; it is our greatest teacher. – Fyodor Dostoevsky",
  "If man wanted nothing but the common good, he would cease to be man. – Fyodor Dostoevsky",
  "Even pain is sometimes a source of pleasure. – Fyodor Dostoevsky",
  "Reason only satisfies man's rational requirements, desire defies reason. – Fyodor Dostoevsky",
  "Man likes to destroy, and that is also a form of creativity. – Fyodor Dostoevsky",
  "Man only likes to count his troubles; he doesn’t calculate his happiness. – Fyodor Dostoevsky",
  "A man may desire something harmful simply to have the right to desire. – Fyodor Dostoevsky",
  "I am a man of deep feeling, but of no use to anyone. – Fyodor Dostoevsky",
  "Man is sometimes stupid, phenomenally stupid. – Fyodor Dostoevsky",
  "You may say it’s nonsense, but in that case I’ll say it’s elegant nonsense. – Fyodor Dostoevsky",
  "Man can get accustomed to anything. – Fyodor Dostoevsky",
  "Man wants freedom, even to his own detriment. – Fyodor Dostoevsky",
  "I do not want peace. I want to create. – Fyodor Dostoevsky",
  "To act against reason is sometimes man's highest privilege. – Fyodor Dostoevsky",
  "Man is a being who can adapt to anything. – Fyodor Dostoevsky",
  "Man is always afraid of something. – Fyodor Dostoevsky",
  "Man is no longer the rational creature philosophers say he is. – Fyodor Dostoevsky",
  "Freedom is the ability to reject reason when it suits you. – Fyodor Dostoevsky",
  "Pain and pleasure often intermingle in life. – Fyodor Dostoevsky",
  "Man’s pride in his free will is his downfall. – Fyodor Dostoevsky",
  "The walls of reason can trap the soul. – Fyodor Dostoevsky",
  "Consciousness is both a gift and a curse. – Fyodor Dostoevsky",
  "Man will seek out suffering to prove his freedom. – Fyodor Dostoevsky",
  "Sometimes, happiness is found in rebellion. – Fyodor Dostoevsky",
  "I am alone, and they are everyone. – Fyodor Dostoevsky",
  "The direct, immediate, legitimate fruit of heightened consciousness is inertia. – Fyodor Dostoevsky",
  "We have all lost touch with life; we are all cripples, every one of us, more or less. – Fyodor Dostoevsky",
  "A toothache is a profound moral problem. – Fyodor Dostoevsky",
  "Man is a creature that can adapt to anything, even to his own misery. – Fyodor Dostoevsky",
  "A real man does not seek comfort. – Fyodor Dostoevsky",
  "The more conscious I was of goodness and of all that was 'sublime and beautiful,' the more deeply I sank into my mire. – Fyodor Dostoevsky",
  "There are things which a man is afraid to tell even to himself, and every decent man has a number of such things stored away in his mind. – Fyodor Dostoevsky",
  "Revenge is, of course, a savage emotion, but it is also deeply human. – Fyodor Dostoevsky",
  "One must accept suffering as part of existence. – Fyodor Dostoevsky",
  "Man is foolish, but his folly is what makes him human. – Fyodor Dostoevsky",
  "It’s better to do nothing! – Fyodor Dostoevsky",
  "Man will sometimes act in direct opposition to his own interests. – Fyodor Dostoevsky",
  "Pleasure sometimes comes in the form of knowing you’ve chosen wrong. – Fyodor Dostoevsky",
  "Freedom, not happiness, is man's ultimate goal. – Fyodor Dostoevsky",
  "Man desires independence so much that he is willing to destroy his own happiness to achieve it. – Fyodor Dostoevsky",
  "I want to prove to myself that I am a man and not a cog in a machine. – Fyodor Dostoevsky",
  "Man sometimes prefers suffering to a life of peace and prosperity. – Fyodor Dostoevsky",
  "Man’s needs are rarely rational; they are driven by his emotions. – Fyodor Dostoevsky",
  "Man has one peculiarity: he always goes against reason. – Fyodor Dostoevsky",
  "The vilest man still desires the freedom to be vile. – Fyodor Dostoevsky",
  "Reason does not satisfy all the needs of the heart. – Fyodor Dostoevsky",
  "Man’s greatest folly is his belief that he can truly know himself. – Fyodor Dostoevsky",
  "Even the man who knows better will sometimes act the fool. – Fyodor Dostoevsky",
  "Consciousness itself is the greatest torment. – Fyodor Dostoevsky",
  "Man wishes for independence at all costs, even to the point of self-destruction. – Fyodor Dostoevsky",
  "Man thrives on rebellion, even when it destroys him. – Fyodor Dostoevsky",
  "Man’s instinct for rebellion is stronger than his instinct for survival. – Fyodor Dostoevsky",
  "The desire to prove one's humanity is at the root of all human folly. – Fyodor Dostoevsky",
  "Man’s yearning for freedom often leads him to despair. – Fyodor Dostoevsky",
  "Man will even seek humiliation if it confirms his independence. – Fyodor Dostoevsky",
  "No man is free from the desire to suffer. – Fyodor Dostoevsky",
  "The more self-aware a man becomes, the more he despairs. – Fyodor Dostoevsky",
  "Man is capable of destroying his own well-being in pursuit of freedom. – Fyodor Dostoevsky",
  "A man can find pleasure even in the denial of his own interests. – Fyodor Dostoevsky",
  "I hated the world, and yet I loved it, too. – Fyodor Dostoevsky",
  "I could not make peace with the world, and the world could not make peace with me. – Fyodor Dostoevsky",
  "Man will sacrifice logic for the sake of asserting his individuality. – Fyodor Dostoevsky",
  "Freedom is worth any cost, even that of misery. – Fyodor Dostoevsky",
  "Man often desires what is most harmful to him. – Fyodor Dostoevsky",
  "A man’s pride will often lead him to folly. – Fyodor Dostoevsky",
  "Man’s greatest mistake is his refusal to accept his own limitations. – Fyodor Dostoevsky",
  "Even in failure, man finds his humanity. – Fyodor Dostoevsky",
  "Man is always searching for meaning, even when there is none. – Fyodor Dostoevsky",
  "The desire to be unique often leads to absurdity. – Fyodor Dostoevsky",
  "Man is capable of creating his own misery in pursuit of his desires. – Fyodor Dostoevsky",
  "Man will reject perfection if it means sacrificing his freedom. – Fyodor Dostoevsky",
  "The irrationality of man is what makes him most human. – Fyodor Dostoevsky",
  "Man cannot bear a life devoid of struggle. – Fyodor Dostoevsky",
  "Man often finds satisfaction in his own suffering. – Fyodor Dostoevsky",
  "I despise the thought of being like everyone else. – Fyodor Dostoevsky",
  "Man would rather destroy the world than let go of his free will. – Fyodor Dostoevsky",
  "The desire for revenge is a natural, human instinct. – Fyodor Dostoevsky",
  "Man’s greatest battle is often within himself. – Fyodor Dostoevsky",
  "The more I understand, the less I am capable of action. – Fyodor Dostoevsky",
  "Man desires chaos because it reminds him he is alive. – Fyodor Dostoevsky",
  "I do not believe in utopias; they are prisons of the soul. – Fyodor Dostoevsky",
  "Man is never satisfied with tranquility; he craves turmoil. – Fyodor Dostoevsky",
  "The walls of my consciousness confine me. – Fyodor Dostoevsky",
  "Man prefers the unknown to the predictable. – Fyodor Dostoevsky",
  "Every man has a dark corner in his heart where he hides his true self. – Fyodor Dostoevsky",
  "Man’s independence is his ultimate paradox; it liberates and enslaves him. – Fyodor Dostoevsky",
  "The craving for individuality drives men to madness. – Fyodor Dostoevsky",
  "Man will always choose his own path, even if it leads to destruction. – Fyodor Dostoevsky",
  "Man’s freedom is defined by his ability to reject logic. – Fyodor Dostoevsky",
  "To act irrationally is to affirm one’s humanity. – Fyodor Dostoevsky",
  "Even in the face of reason, man will choose his own folly. – Fyodor Dostoevsky",
  "The consciousness of one’s flaws is itself a torment. – Fyodor Dostoevsky",
  "Man is both the creator and destroyer of his own destiny. – Fyodor Dostoevsky",
  "The more I rebel, the more I find myself. – Fyodor Dostoevsky",
  "Man’s pride compels him to defy the universe. – Fyodor Dostoevsky",
  "There is a certain sweetness in despair. – Fyodor Dostoevsky",
  "Man’s individuality lies in his refusal to be understood. – Fyodor Dostoevsky",
  "The pursuit of perfection often leads to ruin. – Fyodor Dostoevsky",
  "Man’s heart is a battleground of contradictions. – Fyodor Dostoevsky",
  "Freedom is man’s greatest burden and his greatest gift. – Fyodor Dostoevsky",
  "The desire to assert one’s will is the root of all rebellion. – Fyodor Dostoevsky",
  "Man seeks out suffering to affirm his own existence. – Fyodor Dostoevsky",
  "The irrational acts of man are the truest expressions of his nature. – Fyodor Dostoevsky",
  "Man is most human when he defies reason. – Fyodor Dostoevsky",
  "Man’s capacity for folly is limitless. – Fyodor Dostoevsky",
  "I can accept suffering, but I cannot accept silence. – Fyodor Dostoevsky",
  "Man will destroy even his own happiness to preserve his freedom. – Fyodor Dostoevsky",
  "There is no greater torment than being overly conscious. – Fyodor Dostoevsky",
  "Man often chooses misery over comfort, simply to prove he can. – Fyodor Dostoevsky",
  "The depth of human consciousness is both a blessing and a curse. – Fyodor Dostoevsky",
  "Man desires freedom even at the expense of his own well-being. – Fyodor Dostoevsky",
  "To deny oneself is the ultimate act of freedom. – Fyodor Dostoevsky",
  "Man’s soul is restless in the face of reason. – Fyodor Dostoevsky",
  "The pursuit of self-knowledge is the greatest folly of all. – Fyodor Dostoevsky",
  "Man’s irrationality is the essence of his humanity. – Fyodor Dostoevsky",
  "Man finds freedom in chaos, not order. – Fyodor Dostoevsky",
  "The desire for autonomy drives men to acts of defiance. – Fyodor Dostoevsky",
  "Man is willing to sacrifice his peace for the sake of his individuality. – Fyodor Dostoevsky",
  "Even in darkness, man searches for meaning. – Fyodor Dostoevsky",
  "Man often sabotages himself to prove his freedom. – Fyodor Dostoevsky",
  "There is no greater agony than the awareness of one’s flaws. – Fyodor Dostoevsky",
  "Man’s greatest joy is often found in rebellion. – Fyodor Dostoevsky",
  "Even in despair, man seeks to assert his identity. – Fyodor Dostoevsky",
  "Man would rather go mad than accept a predetermined order. – Fyodor Dostoevsky",
  "The beauty of man lies in his contradictions. – Fyodor Dostoevsky",
  "Man will always crave what he cannot have. – Fyodor Dostoevsky",
  "The greatest act of rebellion is to live freely. – Fyodor Dostoevsky",
  "Man finds solace in his own suffering. – Fyodor Dostoevsky",
  "I was not born to conform, but to defy. – Fyodor Dostoevsky",
  "Man’s desire for freedom often leads him to chaos. – Fyodor Dostoevsky",
  "The irrationality of man is what keeps him human. – Fyodor Dostoevsky",
  "Man is willing to destroy himself to preserve his autonomy. – Fyodor Dostoevsky",
  "The struggle for individuality is the essence of human life. – Fyodor Dostoevsky",
  "Man is at his most authentic when he rebels against reason. – Fyodor Dostoevsky",
  "Freedom is both man’s blessing and his curse. – Fyodor Dostoevsky",
  "Man’s defiance of logic is a testament to his humanity. – Fyodor Dostoevsky",
  "In the heart of man lies a thirst for chaos. – Fyodor Dostoevsky",
  "Man finds pleasure in the act of defiance. – Fyodor Dostoevsky",
  "The pursuit of happiness often leads to despair. – Fyodor Dostoevsky",
  "Man is driven by a desire to prove his uniqueness. – Fyodor Dostoevsky",
  "The awareness of one’s limitations is the beginning of torment. – Fyodor Dostoevsky",
  "Man will embrace suffering to assert his independence. – Fyodor Dostoevsky",
  "The battle for freedom is man’s eternal struggle. – Fyodor Dostoevsky",
  "Man seeks meaning even in the absurd. – Fyodor Dostoevsky",
  "The human spirit thrives on opposition. – Fyodor Dostoevsky",
  "Man will reject paradise if it denies him his will. – Fyodor Dostoevsky",
  "To rebel is to affirm one’s humanity. – Fyodor Dostoevsky",
  "Man often chooses pain to remind himself he is alive. – Fyodor Dostoevsky",
  "The irrational choices of man define his freedom. – Fyodor Dostoevsky",
  "Man cannot live without a sense of purpose, however illogical. – Fyodor Dostoevsky",
  "Freedom is man’s most precious burden. – Fyodor Dostoevsky",
  "The heart of man is restless without struggle. – Fyodor Dostoevsky",
  "Man’s pride leads him to defy even his own good. – Fyodor Dostoevsky",
  "The consciousness of freedom often leads to despair. – Fyodor Dostoevsky",
  "Man is a creature who thrives on contradictions. – Fyodor Dostoevsky",
  "The soul of man yearns for freedom, even in chains. – Fyodor Dostoevsky",
  "The joy of life lies in the act of defiance. – Fyodor Dostoevsky",
  "Man will even create his own misery to assert his will. – Fyodor Dostoevsky",
  "The depth of man’s consciousness is his greatest torment. – Fyodor Dostoevsky",
  "Man will destroy his own paradise for the sake of his freedom. – Fyodor Dostoevsky",
  "The irrationality of man is what makes him noble. – Fyodor Dostoevsky",
  "Man’s freedom lies in his ability to choose his own folly. – Fyodor Dostoevsky",
  "The essence of humanity is the struggle for individuality. – Fyodor Dostoevsky",
  "Man finds peace only in the act of rebellion. – Fyodor Dostoevsky",
  "The beauty of life is found in its contradictions. – Fyodor Dostoevsky",
  "Man’s desire to be free often leads to his own downfall. – Fyodor Dostoevsky",
  "The irrational nature of man is his greatest strength. – Fyodor Dostoevsky",
  "Man seeks freedom even in the face of ruin. – Fyodor Dostoevsky",
  "The soul of man is nourished by his defiance. – Fyodor Dostoevsky",
  "The act of rebellion is the ultimate expression of freedom. – Fyodor Dostoevsky",
  "Man cannot find meaning without struggle. – Fyodor Dostoevsky",
  "The heart of man craves both chaos and order. – Fyodor Dostoevsky",
  "Man finds his humanity in the act of defiance. – Fyodor Dostoevsky",
  "The paradox of freedom is its burden. – Fyodor Dostoevsky",
];

// Function to get a random quote from the array
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Function to display the quote
function displayQuote() {
  const quoteText = getRandomQuote();
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = quoteText;
}

// Event listener for the button to get a new quote
document
  .getElementById("new-quote-btn")
  .addEventListener("click", displayQuote);

// Display a random quote when the page loads
window.onload = displayQuote;
