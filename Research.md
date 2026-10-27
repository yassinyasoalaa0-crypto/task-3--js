What does each method do?
بنعرف نتحكم في عنصار Array من حيث نضيف عنصر او نحذف عنصر

-----------------------------
What does each method return?

push() : بترجع الطول الجديد .

pop : بترجع العنصر المحذوف .

shift : بترجع العنصر المحذوف من البداية

unshift : بترجع الطول الجديد.

---------------------------------
What does pop() return when the array is empty?

بترجع undefind 

---------------------------------
Can you change an array’s elements or an object’s properties when it is declared with const?
يوه، تقدر تغيّر عناصر الـ Array وخصائص الـ Object المعرّفين باستخدام const، لكن مينفعش تعيد إسناد قيمة جديدة للمتغير نفسه.

------------------------------------
How is modifying a value different from reassigning the variable?

Modifying :
 بنغيّر قيمة موجودة جوه الـ Array أو الـ Object من غير ما نغيّر المتغير نفسه. وده ينفع مع let وconst.

Reassigning :
بنخلّي المتغير يشير لقيمة جديدة بدل القيمة اللي كان مرتبط بيها. وده ينفع مع let، لكن مينفعش مع const.

------------------------------------
What is the difference between Function Declaration and Function Expression?

Function Declaration:
 أيوه، يمكن استدعاؤها قبل سطر تعريفها بسبب خاصية اسمها Hoisting.

Function Expression:
 لا، لا يمكن استدعاؤها قبل سطر تعريفها لو كانت مخزنة في متغير باستخدام const؛ لأن المتغير لازم يتعرّف ويتعمل له تهيئة الأول.

 ----------------------------------
 Can you call each one before the line where it is defined? Explain using examples with const for the function expression.

 Function Declaration:
  أيوه، يمكن استدعاؤها قبل سطر تعريفها بسبب خاصية اسمها Hoisting.

Function Expression:
 لا، لا يمكن استدعاؤها قبل سطر تعريفها لو كانت مخزنة في متغير باستخدام const؛ لأن المتغير لازم يتعرّف ويتعمل له تهيئة الأول.

 ----------------------------------
What is the difference between Implicit Return and Explicit Return?

 eturn:
  بنكتب return بنفسنا.

Implicit Return:
 القيمة بترجع تلقائيًا من غير ما نكتب return، باستخدام تعبير واحد من غير {}.

 ----------------------------------
 How can you return an object using an Arrow Function?
لو عايز ترجع Object مباشر، لازم تحط الـ Object بين أقواس عادية () علشان JavaScript متفهمش الأقواس {} على إنها جسم الـ Function. 

-------------------------------------

What is the difference between a Parameter and an Argument?

Parameter:
 هو المتغير اللي بنكتبه وإحنا بنعرّف  Function.

Argument:
 هي القيمة الفعلية اللي بنبعتها  Function لما بنستدعيها.

 ------------------------------------

 What does a function return if it has no return statement?

 لو الـ Function مفيهاش return، فهي بترجع undefined تلقائيًا.

 ------------------------------------

 Does console.log() return the value it displays?

لا، الـ console.log() بترجع undefined. هي بتطبع القيمة، لكنها مش بترجعها.