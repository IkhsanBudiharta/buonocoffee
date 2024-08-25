// Sample data
const userData = [
    { name: "Andrea Sanchez", email: "jking@hotmail.com", role: "Admin", img: "https://via.placeholder.com/40" },
    { name: "Andrea Sanchez", email: "ehall@hotmail.com", role: "User", img: "https://via.placeholder.com/40" },
    { name: "Andrea Sanchez", email: "bmartinez@yahoo.com", role: "User", img: "https://via.placeholder.com/40" },
    { name: "Andrea Sanchez", email: "john_scott@hotmail.com", role: "User", img: "https://via.placeholder.com/40" },
    { name: "Andrea Sanchez", email: "elizabethclark96@yahoo.com", role: "User", img: "https://via.placeholder.com/40" },
    { name: "Andrea Sanchez", email: "swalker@hotmail.com", role: "User", img: "https://via.placeholder.com/40" },

];

const rowsPerPage = 5;
let currentPage = 1;

function renderUserTable(page) {
    const tableBody = document.getElementById('user-table-body');
    tableBody.innerHTML = '';

    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedItems = userData.slice(start, end);

    paginatedItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${item.img}" class="profile-icon rounded-circle" alt="Profile Image" style="width: 40px; height: 40px;"><span class="profile-text">${item.name}</span></td>
            <td>${item.email}</td>
            <td>${item.role}</td>
            <td><a href="#" class="edit-icon-user-list"><i class="fas fa-edit"></i></a></td>
        `;
        tableBody.appendChild(row);
    });

    document.getElementById('user-result-count').innerText = `${userData.length} results`;
    renderUserPagination();
}


function renderUserPagination() {
    const pagination = document.getElementById('user-pagination');
    pagination.innerHTML = '';

    const pageCount = Math.ceil(userData.length / rowsPerPage);
    const maxPagesToShow = 4;
    let startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
    let endPage = Math.min(startPage + maxPagesToShow - 1, pageCount);

    if (endPage - startPage < maxPagesToShow - 1) {
        startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }

    if (currentPage > 1) {
        const prevItem = document.createElement('li');
        prevItem.classList.add('page-item');
        prevItem.innerHTML = `<a class="page-link" href="#"><i class="fas fa-chevron-left"></i></a>`;
        prevItem.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage -= 1;
            renderUserTable(currentPage);
        });
        pagination.appendChild(prevItem);
    }

    for (let i = startPage; i <= endPage; i++) {
        const pageItem = document.createElement('li');
        pageItem.classList.add('page-item');
        if (i === currentPage) pageItem.classList.add('active');
        pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        pageItem.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = i;
            renderUserTable(currentPage);
        });
        pagination.appendChild(pageItem);
    }

    if (currentPage < pageCount) {
        const nextItem = document.createElement('li');
        nextItem.classList.add('page-item');
        nextItem.innerHTML = `<a class="page-link" href="#"><i class="fas fa-chevron-right"></i></a>`;
        nextItem.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage += 1;
            renderUserTable(currentPage);
        });
        pagination.appendChild(nextItem);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderUserTable(currentPage);
});