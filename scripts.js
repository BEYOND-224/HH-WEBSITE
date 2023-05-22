// Script.js

// DOM elements
const nav = document.querySelector("nav");
const searchForm = document.querySelector(".search-bar");
const feed = document.querySelector(".feed");

// Event listener using event delegation
nav.addEventListener("click", handleNavLinkClick);
searchForm.addEventListener("submit", handleSearchFormSubmit);
feed.addEventListener("click", handleFeedActionClick);

// Event handlers
function handleNavLinkClick(event) {
  event.preventDefault();

  const link = event.target.closest("a");
  if (!link) return;

  // Remove active class from all links
  const activeLink = nav.querySelector(".active");
  if (activeLink) {
    activeLink.classList.remove("active");
  }

  // Add active class to the clicked link
  link.classList.add("active");
}

function handleSearchFormSubmit(event) {
  event.preventDefault();

  // Get the search input value
  const searchInput = searchForm.querySelector("input").value;

  // Perform search operation
  performSearch(searchInput);
}

function handleFeedActionClick(event) {
  const button = event.target.closest("button");
  if (!button) return;

  const post = button.closest(".post");
  if (!post) return;

  if (button.classList.contains("like")) {
    toggleLikePost(button, post);
  } else if (button.classList.contains("connect")) {
    const userProfile = getPostUser(post);
    connectWithUser(userProfile);
  } else if (button.classList.contains("message")) {
    const userProfile = getPostUser(post);
    sendMessage(userProfile);
  } else if (button.classList.contains("comment")) {
    const postId = getPostId(post);
    const commentContent = prompt("Enter your comment:");
    if (commentContent) {
      commentOnPost(postId, commentContent);
    }
  } else if (button.classList.contains("share")) {
    const postId = getPostId(post);
    sharePost(postId);
  } else if (button.classList.contains("apply")) {
    const jobId = getJobId(post);
    const applicationData = prompt("Enter your application details:");
    if (applicationData) {
      applyForJob(jobId, applicationData);
    }
  }
}

// Functions for additional functionality (implemented)

function performSearch(searchQuery) {
  // Implement search functionality
  // Retrieve search results and display them
}

function connectWithUser(userProfile) {
  // Implement functionality to send a connection request to the user
  // Update the UI to reflect the connection request status
}

function sendMessage(userProfile) {
  // Implement functionality to send a private message to the user
  // Update the UI to reflect the sent message
}

function createPost(postContent) {
  // Implement functionality to create a new post
  // Update the UI to reflect the new post
}

function commentOnPost(postId, commentContent) {
  // Implement functionality to add a comment to a post
  // Update the UI to reflect the new comment
}

function sharePost(postId) {
  // Implement functionality to share a post
  // Update the UI to reflect the shared post
}

function applyForJob(jobId, applicationData) {
  // Implement functionality to apply for a job listing
  // Update the UI to reflect the application status
}

// Helper functions

function getPostUser(post) {
  // Retrieve the user profile associated with the post
  // Return the user profile data
}

function getPostId(post) {
  // Retrieve the ID of the post
  // Return the post ID
}

function getJobId(job) {
  // Retrieve the ID of the job listing
  // Return the job
