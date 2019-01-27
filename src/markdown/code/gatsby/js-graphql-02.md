```javascript
const WorkPage = ({ data }) => (
	<Layout>
		<div className="container">
			<h1>Work</h1>
			<PortfolioItems data={data}/>
		</div>
	</Layout>
);

export default WorkPage;

export const portfolioQuery = graphql`
	query PortfolioPages {
		allJavascriptFrontmatter(
			# only grab pages located in the 'word' folder
			filter:{
				fileAbsolutePath:{
				regex:"/work/.+/"
			}
			}
			# sort the pages based on the date placed in the front matter
			sort:{
				fields:[
					frontmatter___date
				]
				order:DESC
			}
		){
			edges{
				node{
					id
					node{
						relativeDirectory,
						name
					}
					# determine what data is available from the query
					frontmatter{
						title,
						blurb,
						role,
						thumb,
						tech
					}
				}
			}
		}
	}
```