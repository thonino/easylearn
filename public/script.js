// Targeting
let toastEl = document.querySelector(".toast");
toastEl.style.width = "340px";

// Add options
let toastOptions = { autohide: true, delay: 10000 };

// Create and show bootstrap Element
let toast = new bootstrap.Toast(toastEl, toastOptions);
setTimeout(() => { 
  toast.show(); 
}, 750);

// Tips : AJAX
let checkTarget = document.getElementById("flexSwitchCheckChecked");
checkTarget.addEventListener("change", async () => {
  const formData = new FormData(document.getElementById("tipsForm"));
  formData.set('checkedInput', checkTarget.checked ? "checked" : "");
  try {
    const response = await fetch('/tips', { 
      method: 'POST', 
      body: formData 
    });
    if (response.ok) { 
      let navTips = document.getElementById("navTips");
      const checkedInputValue = formData.get('checkedInput'); 
      if (checkedInputValue === "checked") {
        setTimeout(() => {
          navTips.classList.remove("d-none");
          navTips.classList.add("d-block");
        }, 750);
      } else { 
        navTips.classList.remove("d-block");
        navTips.classList.add("d-none");
      }
    } else { console.error('Submission failed:', response.status);  } 
  } catch (error) {  console.error('Network error:', error); }
});

// Toggle InputEmail
document.addEventListener("DOMContentLoaded", function () {
  var showInputEmail = document.getElementById("showInputEmail");
  var inputEmail = document.getElementById("inputEmail");
  if (showInputEmail) {
    showInputEmail.addEventListener("click", function () {
      inputEmail.classList.toggle("d-none");
      inputEmail.classList.toggle("d-flex");
    });
  }
});

// Toggle InputPassword
document.addEventListener("DOMContentLoaded", function () {
  var showInputPassword = document.getElementById("showInputPassword");
  var inputPassword = document.getElementById("inputPassword");
  if (showInputPassword) {
    showInputPassword.addEventListener("click", function () {
      inputPassword.classList.toggle("d-none");
      inputPassword.classList.toggle("d-flex");
    });
  }
});

// Toggle InputDelete
document.addEventListener("DOMContentLoaded", function () {
  var showInputDelete = document.getElementById("showInputDelete");
  var inputDelete = document.getElementById("inputDelete");
  if (showInputDelete) {
    showInputDelete.addEventListener("click", function () {
      inputDelete.classList.toggle("d-none");
      inputDelete.classList.toggle("d-flex");
    });
  }
});

// DELETE CONFIRMATION
function confirmDeleteUser() {
  if (confirm("Are you sure you want delete your account ?")) {
    document.getElementById("inputDelete").submit();
  }
}
function confirmDeleteNote(noteId) {
  if (confirm("Are you sure you want to delete this Note?")) {
    document.getElementById(`deleteNote${noteId}`).submit();
  }
}
function confirmDeleteLesson() {
  if (confirm("Are you sure you want to delete this Lesson ?")) {
    document.getElementById(`deleteLesson`).submit();
  }
}

// HIDE CREATE CATEGORY
function hideContainer(selected) {
  var categoryContainer = document.getElementById("categoryContainer");
  if (selected.value === "newCat") {
    categoryContainer.style.display = "block";
  } else {
    categoryContainer.style.display = "none";
  }
}

// HIDE CREATE categoryContainer
function hideContainer2(selected) {
  var categoryContainer = document.getElementById("categoryContainer2");
  if (selected.value === "newCat") {
    categoryContainer.style.display = "block";
  } else {
    categoryContainer.style.display = "none";
  }
}

// SUBMIT lessonSelect
const lessonSelect = document.getElementById('lessonSelect');
  if (lessonSelect) {
    lessonSelect.addEventListener('change', function () {
      document.getElementById('lessonForm').submit();
    });
  }
  
// SUBMIT categoryFilter
const categoryFilter = document.getElementById('categoryFilter');
if (categoryFilter) {
  categoryFilter.addEventListener('change', function () {
    document.getElementById('categoryFilterForm').submit();
  });
}

// Initialiser ScrollReveal Right
ScrollReveal().reveal('.showright250', { 
  distance: '250px',
  duration: 1000,
  origin: 'right',
  easing: 'ease-in-out',
});

// Initialiser ScrollRevealleft
ScrollReveal().reveal('.showleft500', { 
  distance: '500px',
  duration: 1000,
  origin: 'left',
  easing: 'ease-in-out',
});

// Initialiser ScrollReveal Right 2
ScrollReveal().reveal('.show', { 
  duration: 1500,
  easing: 'ease-in-out',
});

// Initialiser ScrollReveal Right
ScrollReveal().reveal('.showright', { 
  distance: '100px',
  duration: 1000,
  origin: 'right',
  easing: 'ease-in-out',
  interval: 100,
});

// Initialiser ScrollRevealleft
ScrollReveal().reveal('.showleft', { 
  distance: '100px',
  duration: 1000,
  origin: 'left',
  easing: 'ease-in-out',
  interval: 100,

});

// Initialiser ScrollReveal bottom
ScrollReveal().reveal('.showbottom', { 
  distance: '100px',
  duration: 1000,
  origin: 'bottom',
  easing: 'ease-in-out',
  interval: 100,
});

// Initialiser ScrollReveal top
ScrollReveal().reveal('.showtop', { 
  distance: '50px',
  duration: 300,
  origin: 'top',
  easing: 'ease-in-out',
  interval: 100,
});

// Initialiser ScrollReveal top
ScrollReveal().reveal('.showtopspeed', {
  distance: '75px', 
  duration: 300,
  origin: 'top',
  interval: 30
});
// Initialiser ScrollReveal top
ScrollReveal().reveal('.showleftspeed', { 
  distance: '250px',
  duration: 500,
  origin: 'left',
  easing: 'ease-in-out',
  interval: 50,
});


// Initialiser ScrollReveal top
ScrollReveal().reveal('.showtopslow', { 
  distance: '250px',
  duration: 1500,
  origin: 'top',
  easing: 'ease-in-out',
  interval: 200,
});

// Initialiser ScrollReveal top
ScrollReveal().reveal('.showleftslow', { 
  distance: '100px',
  duration: 500,
  origin: 'left',
  easing: 'ease-in-out',
  interval: 150,
});

// bounce animation
const handleMouseEnter = (event) => {
  const element = event.currentTarget;
  if (!element.classList.contains('start-bounce')) {
    element.classList.add('start-bounce');
    element.addEventListener('animationend', () => {
      element.classList.remove('start-bounce');
    }, { once: true }); 
  }
};

