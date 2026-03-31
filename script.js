// 导航栏滚动效果
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
    }
});

// 汉堡菜单
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 平滑滚动
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// 文章卡片点击
document.querySelectorAll('.post-card').forEach(card => {
    card.addEventListener('click', (e) => {
        e.preventDefault();
        const title = card.querySelector('.post-title').textContent;
        alert(`📝 即将阅读: ${title}\n\n正式版博客将在下一版本支持文章详情页！`);
    });
});

// 类别卡片点击
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', (e) => {
        e.preventDefault();
        const category = card.querySelector('h3').textContent;
        alert(`📂 分类: ${category}\n\n正式版博客将在下一版本支持分类列表！`);
    });
});

// 淡入动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.post-card, .category-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
