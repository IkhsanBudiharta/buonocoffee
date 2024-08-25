// dashboard
const data = [
    { name: "Elizabeth Lee", menu: "AvatarSystems", value: "$359", date: "10/07/2023", status: "New" },
    { name: "Carlos Garcia", menu: "SmoozeShift", value: "$747", date: "24/07/2023", status: "New" },
    { name: "Elizabeth Bailey", menu: "Prime Time Telecom", value: "$564", date: "08/08/2023", status: "In-progress" },
    { name: "Ryan Brown", menu: "OmniTech Corporation", value: "$541", date: "31/08/2023", status: "In-progress" },
    { name: "Ryan Young", menu: "DataStream Inc.", value: "$769", date: "01/05/2023", status: "Completed" },
    { name: "Hailey Adams", menu: "FlowRush", value: "$922", date: "10/06/2023", status: "Completed" },
];

const rowsPerPage = 5;
let currentPage = 1;

function renderTable(page) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedItems = data.slice(start, end);

    paginatedItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="https://via.placeholder.com/40" class="profile-icon rounded-circle mr-4" alt="Profile Image" style="width: 40px; height: 40px;"><span class="profile-text">${item.name}</span></td>
            <td>${item.menu}</td>
            <td>${item.value}</td>
            <td>${item.date}</td>
            <td><span class="status-badge status-${item.status.toLowerCase().replace(' ', '-')}">${item.status}</span></td>
            <td><a href="#" class="edit-icon"><i class="fas fa-edit"></i></a></td>
        `;
        tableBody.appendChild(row);
    });

    document.getElementById('result-count').innerText = `${data.length} results`;
    renderPagination();
}

function renderPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const pageCount = Math.ceil(data.length / rowsPerPage);
    let maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(pageCount, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    const createPageItem = (text, page, isActive = false) => {
        const pageItem = document.createElement('li');
        pageItem.classList.add('page-item');
        if (isActive) pageItem.classList.add('active');
        pageItem.innerHTML = `<a class="page-link" href="#">${text}</a>`;
        pageItem.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = page;
            renderTable(currentPage);
        });
        return pageItem;
    };

    if (currentPage > 1) {
        const prevItem = createPageItem('<i class="fas fa-chevron-left"></i>', currentPage - 1);
        pagination.appendChild(prevItem);
    }

    for (let i = startPage; i <= endPage; i++) {
        const pageItem = createPageItem(i, i, i === currentPage);
        pagination.appendChild(pageItem);
    }

    if (currentPage < pageCount) {
        const nextItem = createPageItem('<i class="fas fa-chevron-right"></i>', currentPage + 1);
        pagination.appendChild(nextItem);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderTable(currentPage);
});
