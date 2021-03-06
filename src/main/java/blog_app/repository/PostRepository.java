package blog_app.repository;

import blog_app.domain.Post;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends CrudRepository<Post, Long> {

	/*
	 * I will return the last post that was created.
	 */
	Post findFirstByOrderByPostedOnDesc();

	List<Post> findAllByOrderByPostedOnDesc();

	Post findBySlug(String slug);

}
