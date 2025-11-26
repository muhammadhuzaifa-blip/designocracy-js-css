let page = 1;
let loading = false;

function fixPostUrls() {
    document.querySelectorAll("#posts-container a").forEach(function (link) {
        if (link.href.includes('/public/')) {
            link.href = link.href.replace('/public/', '/');
        }
    });
}

function fetchPosts(reset = false) {
    if (loading) return;
    loading = true;

    const category = $('#blogs_cats').val();
    const search = $('#search_input_all_blogs').val();

    $.ajax({
        url: "{{ route('posts.fetch') }}",
        data: { category, search, page },
        success: function (res) {
            if (reset) {
                $('#posts-container').html(res.html);
                page = 2;
            } else {
                $('#posts-container').append(res.html);
                page++;
            }

            fixPostUrls(); // 🔧 Fix URLs after new content is injected

            if (!res.hasMore) {
                $('#loadMoreBtn').text('No more posts').prop('disabled', true);
            }

            loading = false;
        }
    });
}

// Initial load
$(document).ready(function () {
    fetchPosts(true);

    $('#loadMoreBtn').on('click', function () {
        fetchPosts();
    });

    $('#blogs_cats, #search_input_all_blogs').on('change keyup', function () {
        page = 1;
        $('#loadMoreBtn').text('Load More').prop('disabled', false);
        fetchPosts(true);
    });
});